import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
