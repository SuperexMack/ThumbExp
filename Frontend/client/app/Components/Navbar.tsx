"use client";
import Link from "next/link";
//import { Github, List } from "lucide-react";
import { Videotape } from "lucide-react";
import { useState } from "react";
import { Clapperboard } from "lucide-react";
export default function Navbar() {
  const [touched, setTouched] = useState(false);

  const toogle = () => {
    setTouched(!touched);
  };

  /*

   const moveToFeature = ()=>{
      if(!feature.current) return
      feature.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }
   
   const moveToworks = ()=>{
      if(!works.current) return
      works.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }
   
   const moveToprice = ()=>{
      if(!pricing.current) return
      pricing.current.scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   }

   */

  return (
    <>
      <div className="w-full z-50 bg-black fixed top-0 h-[80px] border-b border-b-slate-200 flex items-center justify-center">
        <div className="absolute left-[10%] flex items-center justify-center space-x-2">
          <Clapperboard className="h-[50px] w-[50px] text-yellow-600"></Clapperboard>
          <Link href={"/"}>
            <h1 className="text-[40px] font-bold toptext">ThumbExp</h1>
          </Link>
        </div>

        <div className="flex  max-[1000px]:hidden justify-center items-center space-x-5">
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>How it works</Link>
          <Link href={"/"}>Contact us</Link>
          <Link href={"https://github.com/SuperexMack"}>
            {/*<Github></Github>*/}
          </Link>
        </div>

        <div className="absolute min-[1000px]:hidden right-[10%]">
          {/*<List
            onClick={toogle}
            className="text-black h-[30px] w-[30px]"
          ></List>*/}
        </div>
      </div>

      {touched ? (
        <>
          <div className="flex z-50 fixed top-0 bg-white absolute top-20 p-4 flex-col  space-y-5 items-center w-full h-auto border-b border-slate-200 shadow-2xl shadow-slate-300">
            <Link href={"/"}>Features</Link>
            <Link href={"/"}>How it works</Link>
            <Link href={"/"}>Contact us</Link>
            <Link href={"https://github.com/SuperexMack"}>
              <span className="font-bold text-white">Github</span>
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
