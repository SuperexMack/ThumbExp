import express, { Request, Response } from "express";
import dotenv from "dotenv";
import multer from "multer";
import { exec } from "child_process";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

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

app.listen(PORT, () => {
  console.log(`Server is running on the port number ${PORT}`);
});
