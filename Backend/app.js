import express from "express";
import mongoose from "mongoose";
import animeRouter from "./routes/anime-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors()); //used cors to avoid cross origin request errors
app.use(express.json());
app.use("/api/user", router);
app.use("/api/anime", animeRouter);
//connected to mongodb database
mongoose
  .connect(
    "mongodb+srv://Soham:Smusic13@cluster0.9oczekj.mongodb.net/Anime?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected To Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
