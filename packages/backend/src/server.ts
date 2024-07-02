import express from "express";
import cors from "cors";
import {
  TALENT_PATHS,
  MAX_TALENT_POINTS,
  POINTS_SPENT,
} from "./data/talent-paths-data";
import { error } from "console";

const app = express();

const port = process.env.PORT ?? 3000;

app.use(cors());

app.get("/talents", (req, res) => {
  //added artificial delay to simulate a real world scenario - also to see how FE handles it
  setTimeout(() => {
    res.send({
      paths: TALENT_PATHS,
      pointsSpent: POINTS_SPENT,
      maxPoints: MAX_TALENT_POINTS,
    });
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
