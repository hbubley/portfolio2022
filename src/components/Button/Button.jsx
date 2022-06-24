import styles from './Button.module.scss'

import React from 'react'

const Button = ({text, variant, size, type, onChange}) => {
  return (
    <button className={`${variant ? styles[variant]: styles.primary} ${size ? styles[size]: styles.medium}`} type={type} onChange={onChange}>
        {text}
    </button>
  )
}

export default Button