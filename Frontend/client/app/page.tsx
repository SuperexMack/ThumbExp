import Image from "next/image";
import Navbar from "./Components/Navbar";
import TopHeader from "./Components/TopHeader";
import { TracingBeamDemo } from "./Components/feature";
import Pricing from "./Components/pricing.tsx";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen p-2">
        <Navbar></Navbar>
        <div>
          <TopHeader></TopHeader>
        </div>

        <div className="mt-[6rem] w-full h-auto p-2 items-center">
          <div className="w-full h-auto p-2 flex items-center justify-center">
            <h1 className="text-[50px] font-bold underline">Features</h1>
          </div>
          <TracingBeamDemo></TracingBeamDemo>
        </div>

        {/* Pricing Section */}

        <div>
          <Pricing></Pricing>
        </div>
      </div>
      ;
    </>
  );
}
