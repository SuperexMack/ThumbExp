"use client";

import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

export default function pricing() {
  return (
    <>
      <div className="flex mt-[4rem] w-full h-auto p-2 flex-col justify-center space-y-5">
        <div className="flex justify-center mt-[1rem]">
          <h1 className="flex underline text-[50px]">Pricing</h1>
        </div>

        <div className="md:flex md:flex-row flex-col space-y-5 justify-around space-x-6">
          <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <div className="flex w-full justify-center">
                <h1 className="text-[25px] font-bold">Free Pack</h1>
              </div>

              <div className="flex flex-col items-center space-y-5 mt-[20px]">
                <li className="text-center">
                  Right now ThumbExp is open-sourced so you can just clone the
                  repo and can use it in free but in your local machine you need
                  to set up everything
                </li>

                <li className="text-center">
                  If you don't want to run it in your local machine then you can
                  create 7 thumbnails in free right now but after that you have
                  to pay the fees
                </li>

                <li className="text-center">
                  This free pack is not equivalent to the premium pack like the
                  speed is not equal to the paid pack here the speed is slow so
                  if you care about speed then we recommend you the paid pack
                </li>
              </div>

              <div className="w-full h-auto p-2 flex mt-[40px] items-center justify-center">
                <button className="p-2 border-2 border-white w-[80%] bg-black text-white font-bold">
                  Start Free
                </button>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var  cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <div className="flex w-full justify-center">
                <h1 className="text-[25px] font-bold">Monthly Pack</h1>
              </div>

              <div className="flex flex-col items-center space-y-5 mt-[20px]">
                <li className="text-center">
                  Right now ThumbExp is open-sourced so you can just clone the
                  repo and can use it in free but in your local machine you need
                  to set up everything
                </li>

                <li className="text-center">
                  If you don't want to run it in your local machine then you can
                  create 7 thumbnails in free right now but after that you have
                  to pay the fees
                </li>

                <li className="text-center">
                  This free pack is not equivalent to the premium pack like the
                  speed is not equal to the paid pack here the speed is slow so
                  if you care about speed then we recommend you the paid pack
                </li>
              </div>

              <div className="w-full h-auto p-2 flex mt-[40px] items-center justify-center">
                <button className="p-2 border-2 border-white w-[80%] bg-black text-white font-bold">
                  Start Free
                </button>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <div className="flex w-full justify-center">
                <h1 className="text-[25px] font-bold">Yearly Pack</h1>
              </div>

              <div className="flex flex-col items-center space-y-5 mt-[20px]">
                <li className="text-center">
                  Right now ThumbExp is open-sourced so you can just clone the
                  repo and can use it in free but in your local machine you need
                  to set up everything
                </li>

                <li className="text-center">
                  If you don't want to run it in your local machine then you can
                  create 7 thumbnails in free right now but after that you have
                  to pay the fees
                </li>

                <li className="text-center">
                  This free pack is not equivalent to the premium pack like the
                  speed is not equal to the paid pack here the speed is slow so
                  if you care about speed then we recommend you the paid pack
                </li>
              </div>

              <div className="w-full h-auto p-2 flex mt-[40px] items-center justify-center">
                <button className="p-2 border-2 border-white w-[80%] bg-black text-white font-bold">
                  Start Free
                </button>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
}
