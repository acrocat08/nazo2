import express, { Request, Response } from "express";


const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  return res.status(200).json({"data": "hello"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});