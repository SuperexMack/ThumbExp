export default function pricing() {
  return (
    <>
      <div className="flex w-full h-auto p-2 flex justify-around space-x-5">
        <div className="w-full h-screen p-2 flex justify-center items-center">
          <h1 className="flex underline text-[50px]">Pricing</h1>
        </div>

        {/* Free Pricing Card */}
        <div className="h-[300px] w-[300px] flex flex-col space-y-4">
          <h1 className="text-[30px]">0$ (Free)</h1>
        </div>
      </div>
    </>
  );
}
