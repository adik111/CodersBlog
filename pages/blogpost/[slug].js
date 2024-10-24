import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../../styles/Home.module.css'

export default function slug() {
    const [blog, setBlog] = useState([]);
    const router = useRouter();
    const {slug} =router.query;
    useEffect(() => {
       
      const getDetails = async () =>{
        console.log(slug)
        const response = await axios.get(`http://localhost:3000/api/getblogs?slug=${slug}`);
        setBlog(response.data)
      }
      if(slug){
      getDetails()
      }
    }, [slug]);


  return (
    <div>
      <main className={styles.main}>
        <div className="blogs">
            <div className={styles.blogItem}>
                <h3>The Page Title is {blog.title}</h3>
              <p>{blog.desc}</p>
              <p>Author : {blog.author}</p>
            </div>
        </div>
      </main>
    </div>
  );
}
