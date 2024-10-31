import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../../styles/Home.module.css'
import Head from 'next/head';

export default function slug({myBlog}) {
  return (
    <div>
      <Head>
        <title>Coders Blog - {myBlog[0].titel}</title>
      </Head>
      <main className={styles.main}>
        <div className="blogs">
            <div className={styles.blogItem}>
                <h3>The Page Title is {myBlog[0].titel}</h3>
              <p>{myBlog[0].desc}</p>
              <p>Author : {myBlog[0].author}</p>
            </div>
            
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const baseURL = process.env.API_URL;
  const { slug } =  context.query;
  const response = await axios.get(`${baseURL}/api/getblogs?slug=${slug}`);
  return{
    props : {myBlog : response.data  }
  }
}