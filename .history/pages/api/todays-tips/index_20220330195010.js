dbConnect()
prediction

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET' :
            try {
                const predictions = await predictions.find({})
            res.stasus(200)}
            catch (error) {
                
                
            }
    }
}