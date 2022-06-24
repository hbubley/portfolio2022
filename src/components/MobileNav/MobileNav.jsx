import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styles from './MobileNav.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const MobileNav = () => {
    let navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const onNavigate = (to) => {
        setOpen(false)
        navigate(to, {replace: true})
    }
    return (
        <>
            <div className={styles.container}>
                <FontAwesomeIcon icon={faBars} className={styles.icon} onClick={() => setOpen(!open)} />
            </div>
            {
                open && <div className={styles.menu} style={{position: 'fixed', right: '0', top: "7%", backgroundColor: "white", width: '100%', fontSize: '4rem', zIndex: '11'}}>
                    <Link to="/" onClick={() => onNavigate("/")}>Home</Link>
                    <Link to="/about" onClick={() => onNavigate("/about")}>About</Link>
                    <Link to="/portfolio" onClick={() => onNavigate("/portfolio")}>Portfolio</Link>
                    <Link to="/contact" onClick={() => onNavigate("/contact")}>Contact</Link>
                </div>
            }
        </>
    )
}

export default MobileNav