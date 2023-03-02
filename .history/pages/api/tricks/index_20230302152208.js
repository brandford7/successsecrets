import dbConnect from "../../../lib/dbConnect";

import Trick from "../../../models/Trick";
import Cors from "cors";
import initMiddleware from "../../../lib/initMiddleware";

const cors = initMiddleware(
  Co//rs({
    origin: "https://successsecretsbet.com",
    // Only allow requests with GET, POST , OPTIONS,DELETE, AND PUT
    methods: ["GET", "POST", "OPTIONS", "DELETE", "PUT"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const tricks = await Trick.find();
        res.status(200).json({ success: true, data: tricks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const trick = await Trick.create(req.body);
        res.status(201).json({ success: true, data: trick });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
