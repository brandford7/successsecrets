import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";
import Prediction from "../../../models/Prediction";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();
   const session = await getSession({ req });
   if (session) {
     // Signed in
     console.log("Session", JSON.stringify(session, null, 2));
   } else {
     // Not Signed in
     res.status(401).json({message:"Access Denied");
   }
   res.end();

  switch (method) {
    case "GET":
      try {
        const predictions = await Prediction.find({});
        res.status(200).json({ success: true, data: predictions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const prediction = await Prediction.create(req.body);
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
