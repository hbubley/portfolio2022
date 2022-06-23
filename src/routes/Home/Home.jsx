import React from 'react'
import Hero from '../../components/Hero/Hero'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Home.module.scss'
const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Hero />
      <div className={styles.imageContainer}></div>
    </div>
  )
}

export default Home