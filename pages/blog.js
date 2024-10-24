import React, { useEffect,useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import axios from 'axios';
import Link from 'next/link';

export default function blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () =>{
      const response = await axios.get("http://localhost:3000/api/blog");
      setBlogs(response.data)
    }
    getBlogs()
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className={styles.container}>
        <h1>All Blogs</h1>
        <div className={styles.blogList}>
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div key={index} className={styles.blogItem}>
                <h2>{blog.title}</h2>
                <p>{blog.desc.slice(0, 150)}...</p>
                <Link href={`/blogpost/${blog.slug}`}>
                  <button className={styles.submitBtn}>Read More</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
}
