import mongoose from "mongoose";

const TrickSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video_Link: { type: String, required: true, unique: true },
});

export default mongoose.models.Tricks || mongose.model("Tricks", TrickSchema);
