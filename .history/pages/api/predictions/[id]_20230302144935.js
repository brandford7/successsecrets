import dbConnect from "../../../lib/dbConnect";
import Prediction from "../../../models/Prediction";
import Cors from "cors";
import init-cors-middleware from '../../'

const cors = initMiddleware(
  Cors({
    origin: "https://successsecretsbet.com",
    // Only allow requests with GET, POST , OPTIONS,DELETE, AND PUT
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

export default async function handler(req, res) {

await cors(req,res)
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
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

    case "PUT":
      try {
        const prediction = await Prediction.findByIdAndUpdate(
          id,
          {
            country: req.body.country,
            match: req.body.match,
            bet: req.body.bet,
            odd: req.body.odd,
            result: req.body.result,
            start_date: req.body.start_date,
          },
          {
            new: true,
            runValidators: true,
          }
        );
        if (!prediction) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: prediction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
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
