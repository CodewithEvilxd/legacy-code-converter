import Link from "next/link";
import img1 from "@/public/banner1.png";
import img2 from "@/public/banner2.png";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-10 max-w-7xl pt-14 sm:pt-16 pb-20 banner-image">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight max-w-4xl mx-auto text-navyblue sm:text-5xl lg:text-7xl md:4px">
            Convert the Legacy code into Modern code{" "}
          </h1>
          <Link href={"/convert"}>
            <button className="bg-blue-500 rounded-xl h-10 w-[300px] hover:bg-blue-300 m-3 p-3  text-white fond-bold text-md">
              Lets start
            </button>
          </Link>
          <p className="mt-6 text-lg max-w-prose text-center mx-auto leading-8 text-bluegray">
            Convert the legacy code into modern code with the help of powerfull
            LLM model, and make you work done with{" "}
            <span className="text-primary font-bold">Lego</span>!
          </p>

          <Image
            src={img1}
            alt="banner-image"
            className="mt-10 rounded-2xl z-10 border border-cyan-800/20 shadow-xl md:shadow-2xl"
            width={1200}
            height={598}
          />

          <Image
            src={img2}
            alt="banner-image"
            className="mt-10 rounded-2xl z-10 border border-cyan-800/20 shadow-xl md:shadow-2xl"
            width={1200}
            height={598}
          />
        </div>
      </div>
    </>
  );
}
