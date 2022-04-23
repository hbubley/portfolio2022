import React from 'react'
import styles from './SideBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons'
import logoImage from '../../img/HB-LOGO.png'
import { Link, useLocation } from 'react-router-dom'
const SideBar = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <div className={styles.container}>
      <div>
        <img src={logoImage} alt="Logo Image" className={styles.logoImage} />
      </div>
      <div className={styles.linkContainer}>
        <Link to={"/"} className={pathname === "/" ? styles.activeLink : styles.link}>
          <p>
            Home
          </p>
        </Link>
        <Link to={"/about"} className={pathname === "/about" ? styles.activeLink : styles.link}>
          <p>
            About
          </p>
        </Link>
        <Link to={"/portfolio"} className={pathname === "/portfolio" ? styles.activeLink : styles.link}>
          <p>
            Portfolio
          </p>
        </Link>
        <Link to={"/contact"} className={pathname === "/contact" ? styles.activeLink : styles.link}>
          <p>
            Contact
          </p>
        </Link>
      </div>
      <div>
        <div className={styles.resumeContainer}>
          <FontAwesomeIcon className={styles.resumeIcon} icon={faFileDownload} />
          <p className={styles.resumeText}>Resume</p>
        </div>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/haleybubley" referrerPolicy='no-referrer' target="blank">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/hbubley" referrerPolicy='no-referrer' target="blank">
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
          <a href="https://codepen.io/hbubley" referrerPolicy='no-referrer' target="blank">
            <FontAwesomeIcon className={styles.icon} icon={faCodepen} />
          </a>
        </div>
      </div>
    </div >
  )
}

export default SideBar