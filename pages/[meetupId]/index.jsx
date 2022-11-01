import { MongoClient, ObjectId } from 'mongodb';
import React, { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import SecoLayout from '../../components/SecoLayout';



const Detials = (props) => {
  return (
    <Fragment>
      <SecoLayout title={props.meetupData.title} name="description" content={props.meetupData.description}/>
       <MeetupDetails
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
      title={props.meetupData.title}
    />
    </Fragment>
   
  );
};
export const getStaticPaths =  async () => {

   const res = await fetch("/api/singleMeetup", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
})
  const { data } = await res.json()
  return {
    fallback: false,
    paths: data.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
  }
}
export const getStaticProps =  async (context) => {
  const meetupId = context.params.meetupId
  console.log(meetupId)
   const client = await MongoClient.connect("mongodb+srv://felonzo:felix4christ@cluster0.iwpwueq.mongodb.net/meetups?retryWrites=true&w=majority")

    const db = client.db()

    const meetupCollection = db.collection("meetups")

    const data = await meetupCollection.findOne({_id: ObjectId(meetupId) })
  client.close()
  
  return {
    props: {
      meetupData: {
        id: data._id.toString(),
        image: data.image,
        title: data.title,
        description: data.description,
        address: data.address
      }
    }
  }
}
export default Detials;
