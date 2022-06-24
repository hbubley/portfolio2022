import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import styles from './Contact.module.scss'

const Contact = () => {
  const navigate = useNavigate()
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", "text": "test" })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p className={`${styles.headingText} ${styles.textLeft}`}>Let's connect</p>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form} name="contact" id="contact" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.formGroup}>
            <input className={styles.formInput} name="name" id="name" placeholder='Full Name' />
            <label className={styles.formLabel} for="name">First Name</label>
          </div>
          <div className={styles.formGroup}>
            <input className={styles.formInput} name="email" id="email" placeholder='Email Address' />
            <label className={styles.formLabel} for="email">Email Address</label>
          </div>
          <div className={styles.formGroup}>
            <textarea className={styles.formInput} name="message" id="message" placeholder='Message' />
            <label className={styles.formLabel} for="message">Message</label>
          </div>
          <Button text={"Submit"} type={"submit"} />
        </form>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  )
}

export default Contact