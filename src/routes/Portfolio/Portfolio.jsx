import React from 'react'
import Card from '../../components/Card/Card';
import styles from './Portfolio.module.scss';
import { getAnalytics, logEvent } from "firebase/analytics";
const Portfolio = ({ data }) => {
  const analytics = getAnalytics();
  logEvent(analytics, 'screen_view', {
    firebase_screen: "PortfolioPage",
  });
  const displayData = data ? data : new Array(10)
  return (
    <div className={styles.container}>
      <p className={styles.headingText}>Some works</p>
      <div className={styles.projectContainer}>
        {
          data ? data.map((project) => {
            return (
              <Card title={project.title} imgSrc={project.display_image} builtIn={project.built_in} id={project.id} />
            )
          })
            : new Array(10).map((p) => <p>Loading</p>)
        }
      </div>
    </div>
  )
}

export default Portfolio