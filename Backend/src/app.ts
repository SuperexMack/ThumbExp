import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT: number = Number(process.env.PORT);
const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({ msg: "This is the code writing phase" });
});

app.listen(PORT, () => {
  console.log(`Server is running on the port number ${PORT}`);
});
