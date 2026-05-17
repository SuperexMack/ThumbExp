import express, { Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import { exec } from "child_process";
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

app.use(express.json());

//let src = multer.diskStorage({
//destination: (req: Request, file, callback) => {
//callback(null, "./videoFolder");
//},
//filename: (req: Request, file, callback) => {
// callback(null, `input.mp4`);
//},
//});

//const upload = multer({ storage: src });

app.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "This is the code writing phase" });
});

app.post("/v1/convertImage", async (req: Request, res: Response) => {
  console.log("Event triggered");
  const inputPath = path.join(__dirname, "../videoFolder/mack.mp4");
  const outputPath = path.join(__dirname, "../imageFolder/output_%05d.jpg");

  const command = `ffmpeg -i "${inputPath}" -r 0.5 -f image2 "${outputPath}"`;
  // Converting video to the image
  try {
    exec(command, (error, stderr) => {
      if (error) {
        console.log("Something went wrong while running the command " + error);
        return res
          .status(500)
          .json({ msg: "Not able to convert to image " + error });
      }

      if (stderr) {
        console.log("FFmpeg stderr:", stderr);
      }

      console.log("Everthing went fine");
      return res.json({ msg: "Image created :)" });
    });

    console.log("Successfully created the image ");
  } catch (error) {
    console.log("Something went wrong in catch " + error);
    return res.json({ msg: "Something went wrong while creating the action" });
  }
});

app.post("/v1/getImage", async (req: Request, res: Response) => {
  const image = path.join(__dirname, "../imageFolder/ppp.png");

  const myImageBuffer = fs.readFileSync(image);

  const context = "AI is going to change everything";

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

  const imagePath = path.join(__dirname, "../imageFolder/outputp.png");

  fs.writeFileSync(imagePath, buffer);

  return res.json({ msg: "Done with the task" });
});

app.listen(PORT, () => {
  console.log(`Server is ruyunning on the port number ${PORT}`);
});
