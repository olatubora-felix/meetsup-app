// import axios from 'axios';
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
  
 const res = await fetch("http://localhost:3000/api/meetups", {
      method: "GET",
      headers: {
        "Content-type": "application/json"
      }
})
  const {data} = await res.json()

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
