import mongoose from "mongoose";

const PredictionSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, "please provide the name of the country."],
    maxlength: [15, "cannot be more than 10 characters."],
    minlength: [3, "cannot be less than 3 characters"],
  },
  image_url: {
    type: String,
    required: [true, "please provide an image url for this country"],
    maxLength:[1000, "cannot be more than 1000 characters"]
  },
  odd: {
    type: Number,
    required: [true, "please provide an odd for the prediction"],
  },
  match: {
    type: String,
    required: [true, "please provide a match"],
  },
  bet: {
    type: String,
    required: [true, "please provide a bet"],
  },
  result: {
    type: String,
    maxLength:10
  },
  timestaps:{true}
});


export default mongoose.models.Prediction || mongoose.model("Prediction", PredictionSchema);
