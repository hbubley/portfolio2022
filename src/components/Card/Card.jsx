import React from 'react'
import Button from '../Button/Button'
import styles from './Card.module.scss'
const Card = ({ title, imgSrc }) => {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt={imgSrc} className={styles.cardImage} />

            <p className={styles.cardTitle}>{title}</p>
            <Button size={"small"} text={"Read more"} />

        </div>
    )
}

export default Card