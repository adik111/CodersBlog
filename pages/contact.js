import React from 'react'
import Head from 'next/head'
import styles from '../styles/Contact.module.css';
import axios from 'axios';

export default function contact() {
 
  const handleSubmit = async (event) =>{
    event.preventDefault()
    const {Name, Email ,Msg} = event.target;
    const info = {Name : Name.value , Email : Email.value , Msg : Msg.value}
    const response = await axios.post("/api/contactsPost",info);
    if(response.data){
      alert("Message sended");
    }else{
      alert("Message not sended");
    }
  }
  return (
    <div>
        <Head>
            <title>Contact</title>
        </Head>
        <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to get in touch with us using the form below.</p>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="Name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="Email" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="Msg" rows="6" required></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </div>
    </div>
  )
}
