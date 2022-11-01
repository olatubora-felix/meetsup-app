// import axios from 'axios';
import { MongoClient } from 'mongodb';
import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import SecoLayout from '../components/SecoLayout';

const HomePage = (props) => {
  return <main>
  <SecoLayout title="React Meetups" name="description" content="meetups web app is an amazing web app for luxury...you can check out amazing apartment from our web app"/>
  <MeetupList meetups={props.meetups} />;
  </main>
};



export const getStaticProps = async () => {
  
 const client = await MongoClient.connect("mongodb+srv://felonzo:felix4christ@cluster0.iwpwueq.mongodb.net/meetups?retryWrites=true&w=majority")

    const db = client.db()

    const meetupCollection = db.collection("meetups")

    const data = await meetupCollection.find().toArray()
    client.close()

  return {
    props: {
      meetups: data.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString()
      })) },
    revalidate: 10,
  };
};

export default HomePage;
