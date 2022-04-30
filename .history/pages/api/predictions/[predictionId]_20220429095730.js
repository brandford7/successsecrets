import dbConnect from "../../../lib/dbConnect";
import Prediction from "../../../models/Prediction";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const prediction = await Prediction.findById(id);
        if (!prediction) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: prediction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const p = await Prediction.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!prediction) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: prediction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedPrediction = await Prediction.deleteOne({ _id: id });
        if (!deletedPrediction) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
