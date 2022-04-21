import React from 'react'
import Button from '../Button/Button'
import styles from './Hero.module.scss'
const Hero = () => {
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>Hi,</p>
      <p className={styles.headingText}>I'm Haley,</p>
      <p className={styles.headingText}>Web Developer</p>
      <p className={styles.subheadingText}>Front-end developer</p>
      <div className={`${styles.marginTopMedium} ${styles.buttonContainer}`}>
        <Button variant={'primary'} size={'large'} text={"Let's Talk"} />
      </div>
    </div>
  )
}

export default Hero