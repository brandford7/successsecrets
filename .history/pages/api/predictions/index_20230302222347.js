import dbConnect from "../../../lib/dbConnect";
import Prediction from "../../../models/Prediction";

export default async function handler(req, res) {
  await cors(req, res);

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const predictions = await Prediction.find();
        res.status(200).json({ success: true, data: predictions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const prediction = await Prediction.create({
          country: req.body.country,
          match: req.body.match,
          bet: req.body.bet,
          odd: req.body.odd,
          result: req.body.result,
          start_date: req.body.start_date,
        });
        res.status(201).json({ success: true, data: prediction });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
