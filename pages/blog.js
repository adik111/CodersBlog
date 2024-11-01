import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import axios from 'axios';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function blog({data}) {
  const [blogData, setBlogData] = useState(data);
  const [count, setCount] = useState(4);
  const [flag, setFlag] = useState(true);
  
  const fetchData = async () =>{
    const baseURL = process.env.API_URL;
    const response = await axios.get(`/api/blog/?count=${count+2}`);
    setBlogData(response.data)
    setCount(prevCount => {
      const newCount = prevCount + 2;
      if (newCount > response.data.length) {
        setFlag(false);
      }
      return newCount;
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className={styles.container}>
        <h1>All Blogs</h1>
        <div >
          <InfiniteScroll
          className={styles.blogList}
            dataLength={blogData.length}
            next={fetchData}
            hasMore={flag}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You have seen it all</b>
              </p>
            }
          >
            {blogData.length > 0 ? (
              blogData.map((blog, index) => (
                <div key={index} className={styles.blogItem}>
                  <h2>{blog.titel}</h2>
                  <p>{blog.desc.slice(0, 150)}...</p>
                  <Link href={`/blogpost/${blog.slug}`}>
                    <button className={styles.submitBtn}>Read More</button>
                  </Link>
                </div>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context){
  const baseURL = process.env.API_URL;
  const response = await axios.get(`${baseURL}/api/blog/?count=4`);
  return{
    props : {data : response.data}
  }
}
