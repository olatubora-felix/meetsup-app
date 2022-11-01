import Head from 'next/head';
import React from 'react'

const SecoLayout = (props) => {
  return (
      <Head>
        <title>{props.title}</title>
        <meta name={props.name} content={props.content}/>
      </Head>
  )
}

export default SecoLayout