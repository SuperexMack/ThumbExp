import { HeroVideoDialogDemoTopInBottomOut } from "./VideoSection";

export default function TopHeader() {
  return (
    <>
      <div className="w-full mt-[12rem] h-auto flex flex-col space-y-5 items-center">
        <div className="w-[60%] h-auto p-2">
          <h1 className="text-[50px] font-bold text-center">
            Generating Thumbnail Made it Easy and cost-efficient
          </h1>
        </div>

        <div className="w-[40%] h-auto p-2">
          <p className="text-center font-medium ">
            Create stunning YouTube thumbnails in seconds with AI. No designer
            needed, no time wasted just high-converting thumbnails instantly.
          </p>
        </div>

        <div className="w-[50%] flex items-center justify-center h-auto p-2">
          <div className="flex w-[50%] justify-around space-x-5">
            <button className="bg-white text-black font-bold p-2 w-full">
              Start Building
            </button>

            <button className="bg-black text-whote font-bold p-2 w-full">
              Explore
            </button>
          </div>
        </div>

        {/* Okhie so man here comes the Video section huuuh */}

        <div className="flex w-[60%] mt-[3rem] items-center justify-center">
          <HeroVideoDialogDemoTopInBottomOut></HeroVideoDialogDemoTopInBottomOut>
        </div>
      </div>
    </>
  );
}
