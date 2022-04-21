import styles from './Button.module.scss'

import React from 'react'

const Button = ({text, variant, size}) => {
  return (
    <button className={`${variant ? styles[variant]: styles.primary} ${size ? styles[size]: styles.medium}`}>
        {text}
    </button>
  )
}

export default Button