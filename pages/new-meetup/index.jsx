import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';
import SecoLayout from '../../components/SecoLayout';

const Index = () => {
  const router = useRouter()

  
  const onAddMeetup = async (enterMeetData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(enterMeetData)
})
    const data = await res.json()
    console.log(data)

    router.push('/')

  };
  return <Fragment>
  <SecoLayout title="Add new meetup to the user list" name="description" content="This page is for adding new meetup post"/>
    <NewMeetupForm onAddMeetup={onAddMeetup} />;
  </Fragment>
  
};

export default Index;
