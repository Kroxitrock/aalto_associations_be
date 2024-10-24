import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import getMessage from "@utils/TestUtil";
import { myDataSouce as myDataSource } from "@config/app-data-source";
import { User } from "@entities/user";

dotenv.config();

myDataSource
  .initialize()
  .then(() => console.log("Data source initialized!"))
  .catch((e) => {
    console.error("Data source initialization error: " + e);
  });

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  const users = await myDataSource.getRepository(User).find();
  res.json(users);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
