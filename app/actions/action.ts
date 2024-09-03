"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";

let model: ReturnType<typeof GoogleGenerativeAI.prototype.getGenerativeModel>;
const initializeGemini = async () => {
  if (!model) {
    const apiKey = process.env.GEMINI_API_KEY || "";
    const genAI = new GoogleGenerativeAI(apiKey);
    model = await genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
  }
  return model;
};

// Helper function to create a chat session
const createChatSession = async () => {
  const model = await initializeGemini();
  return model.startChat({
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 500,
      responseMimeType: "text/plain",
    },
    history: [],
  });
};

// Function to convert legacy code to modern code
export async function convertCode(formData: FormData) {
  const legacyLang = formData.get("legacyLang") as string;
  const modernLang = formData.get("ModernLang") as string;
  const legacyCode = formData.get("code") as string;

  const chatSession = await createChatSession();

  const convertedCode = await chatSession.sendMessage(`
      Convert this legacy code ${legacyCode} written in ${legacyLang} 
      into modern code language ${modernLang}. 
      Provide the entire code with no explanation,
      
    `);

  const responseText = convertedCode.response
    .text()
    .replace(/(`|##|\*\*|\*\*\*|###)/g, "");

  const generateDocs = await chatSession.sendMessage(`
     write me the documentation of this code with examples write what does the code do, what are the methods, functions do, but don't write code along  ${responseText}
      
    `);

  const responseText2 = generateDocs.response
    .text()
    .replace(/(`|##|\*\*|\*\*\*|###)/g, "");

  return {
    msg: "generated success",
    generatedCode: responseText.trim(),
    documentation: responseText2 ? responseText2.trim() : "",
  };
}
