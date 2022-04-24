import mongoose from "mongoose";

const TrickSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: { type: String, required: true, unique: true },
});


export default mongoose.models.Tricks || mongose.models("Tric")