import { MongoClient } from "mongodb";
// * /api/new-meetup
// * POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://<username>:<password>@<name_cluster>-shard-00-00.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-01.mkmjb.mongodb.net:27017,<name_cluster>-shard-00-02.mkmjb.mongodb.net:27017/<db_name>?ssl=true&replicaSet=atlas-zap81e-shard-0&authSource=admin&retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ address: req.body.address, coords: { lat: req.body.lat, lng: req.body.lng }});

    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
}
