export default function TopHeader() {
  return (
    <>
      <div className="w-full bg-red-600 mt-[12rem] h-auto flex flex-col space-y-5 items-center">
        <div className="w-[60%] bg-green-500 h-auto p-2">
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

        <div className="w-[50%] flex items-center justify-center bg-pink-700 h-auto p-2">
          <div className="flex w-[50%] justify-around space-x-5">
            <button className="bg-white text-black font-bold p-2 w-full">
              Start Building
            </button>

            <button className="bg-black text-whote font-bold p-2 w-full">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
