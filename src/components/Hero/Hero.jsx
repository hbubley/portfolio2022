import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/contact">
          <Button variant={'primary'} size={'large'} text={"Let's Talk"} />
        </Link>
      </div>
    </div>
  )
}

export default Hero