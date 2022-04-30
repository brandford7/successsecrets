import dbConnect from "../../../lib/dbConnect";
import Trick from "../../../models/Trick";

export default async function handler(req, res) {
  
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" :
      try {
        const trick = await Trick.findById(id);
        if (!trick) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: trick });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" :
      try {
        const trick = await Trick.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!trick) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: trick });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" :
      try {
        const deletedTrick = await Trick.deleteOne({ _id: id });
        if (!deletedTrick) {
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
