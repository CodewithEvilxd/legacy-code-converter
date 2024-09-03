import Link from "next/link";
import hero from "../public/hero-logo.png";
import { SiX, SiLinkedin } from "@icons-pack/react-simple-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bottom-0 w-full bg-neutral-900 p-4 px-6 dark:bg-slate-900 lg:px-36 print:hidden">
      <div className="mx-auto mt-4 flex w-full flex-row items-start justify-between md:max-w-screen-2xl">
        <div className="flex w-3/5 flex-col md:flex-row md:justify-between">
          <div className="flex text-white">
            <h2 className="pr-10">Lego</h2>
            <p className="">&copy; All Copyrights are reserved 2024</p>
            {/* <Logo onFooter={true} /> */}
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <h4 className="mb-2 font-semibold text-neutral-200">Follow us</h4>
            <div className="flex gap-x-2">
              <Link target="_blank" href={"https://x.com/codewithevilxd"}>
                <SiX className="text-white hover:text-blue-500" />
              </Link>

              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/in/"
                }
              >
                <SiLinkedin className="text-white hover:text-blue-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
