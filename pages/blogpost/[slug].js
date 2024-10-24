import { useRouter } from 'next/router'
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
  const { slug } =  context.query;
  const response = await axios.get(`https://coders-blogs.vercel.app/api/getblogs?slug=${slug}`);
  return{
    props : {myBlog : response.data , titel : slug }
  }
}