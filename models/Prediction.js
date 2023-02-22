import mongoose from "mongoose";

const PredictionSchema = new mongoose.Schema(
  {
    country: {
      type: [String],
      required: [true, "please provide the name of the country."],
      maxlength: [40, "cannot be more than 40 characters."],
      minlength: [3, "cannot be less than 3 characters"],
      trim: true,
    },

    odd: {
      type: Number,
      required: [true, "please provide an odd for the prediction"],
      max: 1000,
    },
    match: {
      type: String,
      required: [true, "please provide a match"],
      trim: true,
    },
    bet: {
      type: String,
      required: [true, "please provide a bet"],
      trim: true,
    },
    start_date: { type: Date, required: true },

    result: {
      type: String,
      maxLength: 20,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Prediction ||
  mongoose.model("Prediction", PredictionSchema);
