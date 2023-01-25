import mongoose from "mongoose";

const Schema = mongoose.Schema;

//schema for storing user details
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  animes: [{ type: mongoose.Types.ObjectId, ref: "Anime", required: true }],
});
export default mongoose.model("User", userSchema);
// users
