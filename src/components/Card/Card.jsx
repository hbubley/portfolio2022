import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Card.module.scss'
const Card = ({ title, imgSrc, builtIn, id }) => {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt={imgSrc} className={styles.cardImage} />
            <div>
                <p className={styles.cardTitle}>{title}</p>
                <p className={styles.builtIn}>Built with: {builtIn}</p>
            </div>
            <Link to={`${id}`} className={styles.link}>
                <Button size={"small"} text={"Read more"} />
            </Link>
        </div>
    )
}

export default Card