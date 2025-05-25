import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.tqwbhah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    // we could do error handling here
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added!" });
  }
}

export default handler;
