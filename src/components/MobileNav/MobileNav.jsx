import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import styles from './MobileNav.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faBars} className={styles.icon} />
        </div>
    )
}

export default MobileNav