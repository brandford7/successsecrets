import dbConnect from "../../../lib/dbConnect";
import Prediction from "../../../models/Prediction";


const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST", "OPTIONS"],
  })
);


export default async function handler(req, res) {

  const {
    query:{ id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" :
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

    case "PUT" :
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

    case "DELETE" :
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
