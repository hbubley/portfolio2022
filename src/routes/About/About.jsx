import React from 'react'
import styles from './About.module.scss'
import BioPic from '../../img/HB-BIOPIC.png'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <ul className={styles.skillsContainer}>
          <p className={`${styles.headingText} ${styles.borderBottom} ${styles.marginBottomMedium}`}>Skills</p>
          <li>React, React Native</li> 
          <li>Javascript, html, s/css</li>
          <li>Express, Mongo</li>
          <li>Django, Python</li> 
          <li>Cypress</li>
          <li>Github</li>
        </ul>
        <div className={styles.bioPicContainer}>
          <img src={BioPic} alt="Bio Picture" className={styles.bioPic} />
        </div>
      </div>
      <div className={styles.rightCol}>
        <div className={styles.bioText}>
          <p className={styles.text}>I believe web design is the integration of personality, design, and functionality. Art, design, and rhetoric are the framework of my person; Endlessly reinventing basic concepts into stand out works.</p>
          <p className={styles.text}> Through a scenic, hands-on journey, I have ventured through life in search of experience. I lived in Israel for two years, I worked with CAD in the engineering field, I spent time as a preschool teacher and a vet tech, and through these ventures found myself. I learned that I need challenges and I need hard problems to solve. This self-awareness, self-awareness I had worked hard for, is something I value. I feel lucky, grateful even, to feel this emphatically for the software engineering field and the absolute fulfillment it offers me.</p>
          <p className={styles.text}>I do not fear failure. I believe to learn and understand something, you must fail. This methodology and practice have drastically bolstered my resilience. I do not give up when presented with an obstacle, rather, I embrace it and find any opportunities for growth along the way.</p>
        </div>
        <div className={`${styles.marginTopMedium}`}>
          <p className={`${styles.textRight} ${styles.headingText} ${styles.borderTop}`}>Nice to Meet You</p>
        </div>
      </div>
    </div>
  )
}

export default About