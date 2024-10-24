import React from 'react'
import Head from 'next/head'
import styles from '../styles/About.module.css';

export default function about() {
  return (
    <div>
      <Head>
            <title>About</title>
        </Head>
        <div className={styles.container}>
      <h1>About Coders Blog</h1>
      <p>
        Welcome to Coders Blog, a platform created by and for coders! Our mission is to provide insightful, practical, and up-to-date blogs on all things coding. Whether you are just starting out or you are a seasoned developer, we aim to offer content that will help you improve your skills, stay updated with industry trends, and become a better coder.
      </p>
      <p>
        At Coders Blog, we believe in sharing knowledge and fostering a community where developers can learn, collaborate, and grow together. Our blog posts cover a wide range of topics including web development, programming languages, best practices, tips, and tutorials.
      </p>
      <p>
        We hope you find the content on our site helpful and inspiring. If you have any questions or suggestions, feel free to reach out to us. Happy coding!
      </p>
    </div>
    </div>
  )
}
