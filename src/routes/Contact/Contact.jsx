import React from 'react'
import Button from '../../components/Button/Button'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <p className={`${styles.headingText} ${styles.textLeft}`}>Let's connect</p>
        <form className={styles.form}>
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
          <Button text={"Submit"} />
        </form>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  )
}

export default Contact