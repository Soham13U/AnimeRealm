import express from "express";
import {
  addAnime,
  deleteAnime,
  getAllAnime,
  getById,
  getByUserId,
  updateAnime,
} from "../controllers/anime-controller";
const animeRouter = express.Router();

//routes for various components
animeRouter.get("/", getAllAnime);
animeRouter.post("/add", addAnime);
animeRouter.put("/update/:id", updateAnime);
animeRouter.get("/:id", getById);
animeRouter.delete("/:id", deleteAnime);
animeRouter.get("/user/:id", getByUserId);

export default animeRouter;
