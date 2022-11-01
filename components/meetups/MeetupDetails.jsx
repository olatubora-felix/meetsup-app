import Image from 'next/image';
import React from "react";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      <Image src={props.image} alt={props.title} layout="fill"/>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;
