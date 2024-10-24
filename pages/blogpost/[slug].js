import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../../styles/Home.module.css'
import Head from 'next/head';

export default function slug({myBlog, titel}) {
  return (
    <div>
      <Head>
        <title>Coders Blog - {titel}</title>
      </Head>
      <main className={styles.main}>
        <div className="blogs">
            <div className={styles.blogItem}>
                <h3>The Page Title is {myBlog.title}</h3>
              <p>{myBlog.desc}</p>
              <p>Author : {myBlog.author}</p>
            </div>
            
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const baseURL = process.env.NODE_ENV === 'production'
    ? `https://${context.req.headers.host}`  
    : 'http://localhost:3000'; 
  const { slug } =  context.query;
  const response = await axios.get(`${baseURL}/api/getblogs?slug=${slug}`);
  return{
    props : {myBlog : response.data , titel : slug }
  }
}