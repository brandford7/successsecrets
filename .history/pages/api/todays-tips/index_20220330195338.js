dbConnect();
prediction;

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
      case "GET":
          try {
              const predictions = await predictions.find({});
              res.stasus(200).json({ success: true, data: predictions });
          } catch (error) {
              res.status(400).json({ success: false });
          }
          break;
      case 'POST':
          try {const prediction = await predictions.create }
          catch(error){}
  }
}
