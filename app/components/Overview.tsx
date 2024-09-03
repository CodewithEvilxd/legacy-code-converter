import Image from "next/image";
// import dashboard from "@public/platform/dashboard.png";
// import { Button } from '../../../ui/button';
import Link from "next/link";

import hero from "@/public/Feature.png";
const DashboardSection = () => {
  return (
    <>
      <div id="overview">
        <div className="my-20 flex w-full items-center justify-between">
          <div className="flex w-full flex-col items-start justify-center px-4 md:px-12">
            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-500">
              <span className="pr-1 text-lg font-bold text-blue-600">|</span>The
              Convert the legacy code into modern code with the help of powerful
              LLM model!
            </h3>
            <h2 className="mb-6 mt-2 text-2xl font-semibold text-neutral-800 dark:text-neutral-500 md:text-4xl">
              What is Lego?
            </h2>
            <p className="text-lg font-medium text-neutral-600 dark:text-neutral-500">
              Lego is an AI tool that converts outdated code into modernized
              code while maintaining efficiency and accuracy. It utilizes the
              Gemini AI, a next-generation model developed by Google known for
              its significant advancements in AI capabilities. Part of the
              Gemini series, this model is highly efficient and versatile,
              capable of handling a wide range of tasks with exceptional
              performance. Gemini 1.5 Ultra, the latest iteration, showcases
              improvements across various dimensions, achieving comparable
              quality to its predecessor, 1.0 Ultra, while utilizing fewer
              computational resources. A standout feature of Gemini 1.5 Ultra is
              its breakthrough in long-context understanding, allowing it to
              consistently process up to 1 million tokens, the longest context
              window of any large-scale foundation model to date
            </p>
          </div>
          {/* <Button
          className="mt-6 rounded-full hover:shadow-sm"
          size={'lg'}
          asChild
        > */}
          {/* <Link
            href={'https://harkirat.classx.co.in/new-courses'}
            target="_blank"
          > */}
          {/* <p className="text-white">Explore courses</p>{' '}
            <ChevronRight className="ml-1 h-4 w-4 text-white duration-200 ease-in-out hover:translate-x-1" />
          </Link>
        </Button>
      </div> */}

          {/* <CardContainer className="w-full cursor-pointer"> */}
          <Link href="" target="_blank">
            <div className="hidden rounded-l-xl bg-slate-200 py-3 pl-3 dark:bg-slate-800 md:block md:rounded-l-2xl md:py-6 md:pl-6">
              {/* <CardItem> */}
              <Image
                src={hero}
                alt={"platform"}
                width={1400}
                height={1260}
                className="rounded-l-lg md:rounded-l-xl"
              />
              {/* </CardItem>  */}
            </div>
          </Link>
          {/* </CardContainer>  */}
        </div>
      </div>
    </>
  );
};

export default DashboardSection;
