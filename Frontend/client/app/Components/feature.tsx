"use client";
import React from "react";

import { TracingBeam } from "../../components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="text-xl mb-4">{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Upload the video and see the magic",
    description: (
      <>
        <p>
          Starting with ThumpExp is easy just upload the video from your machine
          and wait for some moment and then see the magic after some moment a
          lot of thumbnail suggestions will come to your screen scroll and see
          each and every template and look for the best template that you are
          looking for your video
        </p>
      </>
    ),
    badge: "Starting Step",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Second step is quite easy",
    description: (
      <>
        <p>
          In the second step you don't need to do anything hard after selecting
          the template go to the input box and write the context there (what is
          the context of your thumbnail or video) and then click the "Get
          Thumbnail" button and again wait for a moment (it will take around
          11-20 seconds) and boom after some moment you will get a cool
          thumbnail . download that and use in your video
        </p>
      </>
    ),
    badge: "Second Step",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "What's the cost",
    description: (
      <>
        <p>
          Right now ThumbExp is open sourced so right now you can use it in your
          local machine as well as soon we are going to bring the site live but
          still in the live site too you will able to create 1 Thumbnail in free
          and when you are going to use it in your local you can create 8-10
          Thumbnails
        </p>
      </>
    ),
    badge: "$ spend",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
