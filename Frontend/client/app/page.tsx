import Image from "next/image";
import Navbar from "./Components/Navbar";
import TopHeader from "./Components/TopHeader";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen p-2">
        <Navbar></Navbar>
        <div>
          <TopHeader></TopHeader>
        </div>
      </div>
      ;
    </>
  );
}
