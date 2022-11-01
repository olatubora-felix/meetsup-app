// api/new-meetup
import { MongoClient } from 'mongodb';
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data
    
    const client = await MongoClient.connect("mongodb+srv://felonzo:felix4christ@cluster0.iwpwueq.mongodb.net/meetups?retryWrites=true&w=majority")

    const db = client.db()

    const meetupCollection = db.collection("meetups")

    const result = await meetupCollection.insertOne(data)

    client.close()

    res.status(201).json({message: "Meetup Inserted successfully!"})


    
  }
};

export default handler