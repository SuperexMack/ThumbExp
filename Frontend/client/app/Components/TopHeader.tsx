import { HeroVideoDialogDemoTopInBottomOut } from "./VideoSection";
import Link from "next/link";

export default function TopHeader() {
  return (
    <>
      <div className="w-full mt-[12rem] h-auto flex flex-col space-y-5 items-center">
        <div className="bg-purple-300 w-[800px] h-[800px] rounded-full absolute z-[10] left-[25%] top-[10%] blur-3xl opacity-30"></div>

        <div className="md:w-[60%] w-full h-auto p-2 z-20">
          <h1 className="md:text-[50px] text-[30px] font-bold text-center">
            Generating Thumbnail Made it Easy and cost-efficient
          </h1>
        </div>

        <div className="md:w-[40%] w-[80%] h-auto p-2">
          <p className="text-center z-[30] font-medium ">
            Create stunning YouTube thumbnails in seconds with AI. No designer
            needed, no time wasted just high-converting thumbnails instantly.
          </p>
        </div>

        <div className="md:w-[50%] w-full flex z-[30] items-center justify-center h-auto p-2">
          <div className="flex md:w-[50%] w-full justify-around space-x-5">
            <Link href="/thumbCreate" className="w-full">
              <button className="bg-white text-black font-bold p-2 w-full">
                Start Building
              </button>
            </Link>

            <Link href={"/"} className="w-full">
              <button className="bg-black text-whote font-bold p-2 w-full">
                Explore
              </button>
            </Link>
          </div>
        </div>

        {/* Okhie so man here comes the Video section huuuh */}

        <div className="flex w-[60%] mt-[3rem] z-[30] items-center justify-center">
          <HeroVideoDialogDemoTopInBottomOut></HeroVideoDialogDemoTopInBottomOut>
        </div>
      </div>
    </>
  );
}
