import mongoose from "mongoose";
import Anime from "../model/Anime";
import User from "../model/User";

//get anime from database
export const getAllAnime = async (req, res, next) => {
  let animes;
  try {
    animes = await Anime.find().populate("user");
  } catch (err) {
    return console.log(err);
  }
  if (!animes) {
    return res.status(404).json({ message: "No animes Found" });
  }
  return res.status(200).json({ animes });
};

//add anime to database
export const addAnime = async (req, res, next) => {
  const { title, description,status, rating, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "No User By This ID" });
  }
  const an = new Anime({
    title,
    description,
    status,
    rating,
    image,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await an.save({ session });
    existingUser.animes.push(an);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ an });
};

//update anime from database
export const updateAnime = async (req, res, next) => {
  const { title, description, status, rating  } = req.body;
  const animeId = req.params.id;
  let an;
  try {
    an = await Anime.findByIdAndUpdate(animeId, {
      title,
      description,
      status,
      rating,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!an) {
    return res.status(500).json({ message: "Unable To Update The anime" });
  }
  return res.status(200).json({ an });
};

//get anime by ID from database
export const getById = async (req, res, next) => {
  const id = req.params.id;
  let an;
  try {
    an = await Anime.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!an) {
    return res.status(404).json({ message: "No anime Found" });
  }
  return res.status(200).json({ an });
};

//delete anime from database
export const deleteAnime = async (req, res, next) => {
  const id = req.params.id;

  let an;
  try {
    an = await Anime.findByIdAndRemove(id).populate("user");
    await an.user.animes.pull(an);
    await an.user.save();
  } catch (err) {
    console.log(err);
  }
  if (!an) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};

//get user by ID from database
export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userAnime;
  try {
    userAnime = await User.findById(userId).populate("animes");
  } catch (err) {
    return console.log(err);
  }
  if (!userAnime) {
    return res.status(404).json({ message: "No anime Found" });
  }
  return res.status(200).json({ user: userAnime });
};
