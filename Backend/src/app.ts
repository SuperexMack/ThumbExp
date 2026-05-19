import express, { Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import { exec } from "child_process";
import cors from "cors";
import path from "path";
//import { GoogleGenAI } from "@google/genai";
import Replicate from "replicate";
import fs, { writeFileSync } from "fs";

dotenv.config();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;
const app = express();

if (API_KEY == undefined) {
  console.log("The API_KEY is undefined");
  process.exit(1);
}

const replicate = new Replicate({
  auth: API_KEY,
});

if (replicate == undefined) {
  console.log("There is something wrong while connecting to the main platform");
  process.exit(1);
}

app.use(express.json({ limit: "500mb" }));

app.use(cors());

const src = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    const valueId = "abc";
    const uploadPath = path.join(__dirname, `../${valueId}`);

    // Create folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    callback(null, uploadPath);
  },

  filename: (req: Request, file, callback) => {
    callback(null, "input.mp4");
  },
});

const upload = multer({ storage: src });

app.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "This is the code writing phase" });
});

app.post(
  "/v1/convertImage",
  upload.single("file"),
  async (req: Request, res: Response) => {
    console.log("Event triggered");

    let imagePathName = Date.now().toString();

    //let userId = req.body.id;
    //
    let userId = "abc";

    fs.mkdir(imagePathName, (err) => {
      if (err) {
        console.log("Not able to create the image folder " + err);
        return;
      } else {
        console.log("Path Created");
      }
    });

    const inputPath = path.join(__dirname, `../${userId}/input.mp4`);
    const outputPath = path.join(
      __dirname,
      `../${imagePathName}/output_%05d.png`,
    );

    const command = `ffmpeg -i "${inputPath}" -r 0.5 -f image2 "${outputPath}"`;
    // Converting video to the image
    try {
      exec(command, (error, stderr) => {
        if (error) {
          console.log(
            "Something went wrong while running the command " + error,
          );
          return res
            .status(500)
            .json({ msg: "Not able to convert to image " + error });
        }

        if (stderr) {
          console.log("FFmpeg stderr:", stderr);
        }

        const allImages = path.join(__dirname, `../${imagePathName}`);

        fs.readdir(allImages, (err, files) => {
          if (err) {
            console.log("Unable to get the images " + err);
            return res
              .status(404)
              .json({ msg: "Unable to get the images " + err });
          }

          let myImagesArray = files.map((fileValue) => {
            let realPath = path.join(allImages, fileValue);
            let fileBufferValue = fs.readFileSync(realPath);

            return `data:png;base64,${fileBufferValue.toString("base64")}`;
          });

          let videoFolderr = path.join(__dirname, "../abc");
          let imageFolderr = path.join(__dirname, `../${imagePathName}`);

          if (fs.existsSync(videoFolderr)) {
            fs.rmSync(videoFolderr, { recursive: true, force: true });
          }

          if (fs.existsSync(imageFolderr)) {
            fs.rmSync(imageFolderr, { recursive: true, force: true });
          }

          return res.status(200).json({
            msg: "Successfully created images",
            imageArray: myImagesArray,
          });
        });

        //console.log("Everthing went fine");
        //return res.json({ msg: "Image created :)" });
      });

      console.log("Successfully created the image ");
    } catch (error) {
      console.log("Something went wrong in catch " + error);
      return res.json({
        msg: "Something went wrong while creating the action",
      });
    }
  },
);

let srcnew = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    let fileName = "../abc";
    let newFileCreation = path.join(__dirname, fileName);
    if (!fs.existsSync(newFileCreation)) {
      fs.mkdirSync(newFileCreation);
    }

    callback(null, newFileCreation);
  },

  filename: (req: Request, file, callback) => {
    callback(null, "input.png");
  },
});

let myUpload = multer({ storage: srcnew });

app.post(
  "/v1/getImage",
  multer().none(),
  async (req: Request, res: Response) => {
    const context = req.body.context;
    let base64DataUser = req.body.file;
    let Base64Data = base64DataUser.split(";base64,").pop();
    let bufferImage = Buffer.from(Base64Data, "base64");

    const myImageBuffer = bufferImage;

    console.log("Got the image");

    const input = {
      prompt: `You are an expert YouTube thumbnail designer with world-class skills in visual storytelling, composition, and attention-grabbing design.

Your task is to transform the provided image into a highly professional, click-worthy YouTube thumbnail.

IMPORTANT RULES:
1. Use ONLY the provided image as the source material.
2. Do NOT add any new people, objects, or external images.
3. You may crop, zoom, enhance, blur the background, adjust colors, increase sharpness, add glow effects, and apply professional design techniques.
4. Preserve the identity and key subject from the original image.
5. The final thumbnail must look polished, dramatic, and optimized to maximize click-through rate (CTR).

THUMBNAIL CONTEXT:
${context}

DESIGN GOALS:
- Make the main subject the clear focal point.
- Use cinematic color grading and strong contrast.
- Add depth using background blur and subtle lighting effects.
- Enhance facial expressions and details to make them more impactful.
- Use vibrant, high-energy colors that stand out on YouTube.
- Create a clean and professional composition suitable for top creators.
- Ensure the thumbnail remains sharp and visually appealing even at small sizes.

STYLE REFERENCES:
- MrBeast
- Ali Abdaal
- Iman Gadzhi
- Fireship
- Modern high-CTR YouTube thumbnails

OUTPUT REQUIREMENTS:
- 16:9 aspect ratio (1280x720).
- High resolution and extremely sharp.
- Professional and premium quality.
- Designed to immediately grab attention and generate clicks.

Your objective is to create a thumbnail that looks like it was designed by a top-tier professional designer and is capable of competing with the best thumbnails on YouTube.`,
      resolution: "1 MP",
      aspect_ratio: "16:9",
      input_images: [myImageBuffer],
      output_format: "png",
      output_quality: 80,
      safety_tolerance: 2,
    };

    const output = await replicate.run("black-forest-labs/flux-2-pro", {
      input,
    });

    console.log("The info is ", output);

    const imageUrl = Array.isArray(output) ? String(output[0]) : String(output);

    const fetchingImage = await fetch(imageUrl);

    const arrayBuffer = await fetchingImage.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    // const imagePath = path.join(__dirname, "../abc/outputp.png");

    //fs.writeFileSync(imagePath, buffer);
    //

    let fileSending = `data:png;base64,${buffer.toString("base64")}`;
    let myArr = [];

    myArr.push(fileSending);

    console.log("Thumbnail sent huuuh");

    return res
      .status(200)
      .json({ msg: "Done with the task", imageArray: myArr });
  },
);

app.listen(PORT, () => {
  console.log(`Server is ruyunning on the port number ${PORT}`);
});
