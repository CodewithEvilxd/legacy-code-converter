"use client";
import { useState } from "react";
import { convertCode } from "../../actions/action";

const LegacyCodeConverter = () => {
  const [outputCode, setOutputCode] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async (event: any) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target); // Create FormData from the form
    setLoading(true); // Set loading to true when conversion starts

    try {
      const response = await convertCode(formData);
      if (response.msg === "generated success") {
        setOutputCode(response.generatedCode);
        setDocumentation(response.documentation);
        setShowForm(false);
        setErrorMessage("");
      } else {
        setErrorMessage("Conversion failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during conversion.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-pink-50 to-blue-50">
      {showForm ? (
        <form
          onSubmit={handleConvert}
          className="bg-white p-6 rounded-lg shadow-2xl max-w-3xl w-full"
        >
          <div className="flex justify-between mb-4">
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">
                Select Legacy Code Language
              </label>
              <input
              required
                name="legacyLang"
                id="legacyLang"
                placeholder="Ex: Cobol, Delphi, Perl etc"
                className="p-2 bg-white border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">
                Select Modern Code Language
              </label>
              <input
              required
                name="ModernLang"
                id="ModernLang"
                placeholder="Ex: C, C++, Python, JAVA"
                className="p-2 bg-white border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <textarea
            required
              className="w-full p-4 border border-gray-300 rounded resize-none"
              rows={10}
              name="code"
              id="code"
              placeholder="Your legacy code here"
            ></textarea>
          </div>
          <button
            className="mt-4 w-full p-2 bg-black text-white rounded hover:bg-gray-800"
            type="submit"
          >
            {loading ? "Converting..." : "Convert"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}{" "}
        </form>
      ) : (
        <div className="bg-white flex flex-col md:flex-row p-6 rounded-lg shadow-2xl w-full">
          <div className="flex flex-col w-full md:w-1/2 m-3 p-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl md:text-4xl">
                Converted Code:
              </h3>
              <button
                onClick={() => copyToClipboard(outputCode)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded p-2"
              >
                Copy
              </button>
            </div>
            <pre className="p-2 border overflow-x-auto font-bold border-gray-300 rounded mb-4">
              {outputCode}
            </pre>
          </div>

          <div className="flex flex-col w-full md:w-1/2 p-3 m-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-2xl md:text-4xl">
                Documentation:
              </h3>
              <button
                onClick={() => copyToClipboard(documentation)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded p-2"
              >
                Copy
              </button>
            </div>
            <pre className="p-2 border font-bold border-gray-300 rounded overflow-x-auto">
              {documentation}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegacyCodeConverter;
