// api/new-meetup
import { MongoClient } from 'mongodb';
const handler = async (req, res) => {
  if (req.method === "GET") {

    const client = await MongoClient.connect("mongodb+srv://felonzo:felix4christ@cluster0.iwpwueq.mongodb.net/meetups?retryWrites=true&w=majority")

    const db = client.db()

    const meetupCollection = db.collection("meetups")

    const data = await meetupCollection.find().toArray()
    client.close()

    res.status(201).json({message: "Meetup Retrive successfully!", data})


    
  }
};

export default handler