"use client";
import img from "@/public/iPad.png";
import svg from "@/public/img.svg";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface features {
  heading: string;
  subheading: string;
}

const features: features[] = [
  {
    heading: "Automated Code Conversion",
    subheading:
      "Streamlines the migration process by transforming legacy code automatically",
  },
  {
    heading: "Intelligent Code Generation",
    subheading:
      "Produces clean, maintainable code that matches target conventions.",
  },
  {
    heading: "Cost and Time Savings",
    subheading:
      "Reduces time and effort, leading to significant cost efficiency.",
  },
  {
    heading: "Improved Scalability",
    subheading:
      "Enables the modernized system to handle increased workloads and user demands.",
  },
];

export default function Features() {
  return (
    <div id="features">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:-ml-64">
            <Image src={img} alt="iPad-image" width={4000} height={900} />
          </div>

          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Features of Lego
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Convert the legacy code into modern code in ease
            </h4>

            <div className="mt-10">
              {features.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-10 flex items-center justify-center bg-circlebg">
                    <Image src={svg} alt="check-image" width={24} height={24} />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
