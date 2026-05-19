"use client";
import Navbar from "../Components/Navbar";
import { CloudUpload } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function () {
  const videoRef = useRef<HTMLInputElement | null>(null);
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [found, setFound] = useState(false);
  const [contextValue, setContextValue] = useState("");

  const [imageValue, setImageValue] = useState("");

  const [thumbNail, setThumbNail] = useState("");

  interface myArr {
    imageArray: string[];
  }

  const setImage = () => {
    if (!videoRef.current) return;
    videoRef.current?.click();
  };

  const sendVideo = async (file: File) => {
    let formData = new FormData();
    formData.append("file", file);
    setFound(true);
    let response = await fetch("http://localhost:9000/v1/convertImage", {
      method: "POST",
      body: formData,
    });

    if (response.status == 200) {
      let arrValue: myArr = await response.json();
      setImageArray(arrValue.imageArray);
    }
    setFound(false);
  };

  const getFile = (e: any) => {
    const file = e.target.files[0];
    if (file) sendVideo(file);
  };

  const generateThumbnail = async () => {
    setFound(true);
    let formData = new FormData();
    formData.append("file", imageValue);
    formData.append("context", contextValue);
    let response = await fetch("http://localhost:9000/v1/getImage", {
      method: "POST",
      body: formData,
    });

    if (response.status == 200) {
      console.log("done");
      let arrValue: myArr = await response.json();
      console.log("Value " + arrValue.imageArray);
      setImageArray(arrValue.imageArray);
    }
    setFound(false);
  };

  const imageSetting = (image: string) => {
    setImageValue(image);
    console.log("Image added with name " + image);
  };

  return (
    <>
      <div className="flex w-full min-h-screen pb-5 flex flex-col items-center">
        <Navbar></Navbar>

        <div className="flex w-[90%] mt-[13rem] h-auto p-2 flex-col items-center">
          <div className="w-[50%] flex items-center flex flex-col">
            <p className="text-[30px] text-center font-bold text-white">
              ThumbExp GameSection
            </p>
            <p className="mt-[12px] text-slate-100 text-center">
              You have to just add the video in the below section for which you
              want to create Thumbnail and then wait for some minutes and you
              will get some Thumbnail options select one of them which you found
              cool and then wait some more minutes and boom you get the
              Thumbnail
            </p>
          </div>

          <div
            onClick={setImage}
            className="w-[700px] mt-[30px] flex flex-col items-center space-y-5 justify-center h-[400px] border-2 border-white"
          >
            <CloudUpload className="w-[60px] text-blue-500 h-[60px]"></CloudUpload>
            <input
              onChange={getFile}
              className="hidden"
              ref={videoRef}
              type="file"
            ></input>
            <h1 className="text-[30px] text-yellow-400 font-bold">
              Click here to upload video
            </h1>
          </div>

          <div className="flex w-full h-auto mt-[20px] p-2 flex items-center justify-center">
            <input
              onChange={(e) => setContextValue(e.target.value)}
              className="p-2 w-[40%] border-2 border-white"
              placeholder="Enter Context"
            ></input>
          </div>

          <div className="flex w-full h-auto mt-[20px] p-2 flex items-center justify-center">
            <button
              onClick={generateThumbnail}
              className="border-2 cursor-pointer border-purple-500 p-2 bg-black text-white font-bold border-white"
            >
              Generate Thumbnail
            </button>
          </div>
        </div>

        <div className="w-full flex-wrap space-y-5 h-auto p-2 flex justify-around space-x-5">
          {found ? (
            <div className="w-[50px] h-[50px] border-4 border-white rounded-full border-t-black animate-spin"></div>
          ) : (
            <>
              {imageArray.map((image, index) => (
                <Image
                  onClick={() => imageSetting(image)}
                  key={index}
                  src={image}
                  alt="Image_coming_soon"
                  width={300}
                  height={300}
                ></Image>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
