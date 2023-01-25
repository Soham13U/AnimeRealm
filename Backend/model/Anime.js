import mongoose from "mongoose";

const Schema = mongoose.Schema;

//schema for storing anime details
const animeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['completed','dropped','watching','on-hold'],
    default: 'completed',
    required: true,
  },
  rating:{
    type: Number,
    min: 0,
    max: 10,
    default: 0,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Anime", animeSchema);
