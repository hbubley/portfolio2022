import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styles from './MobileNav.module.scss'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const MobileNav = () => {
    let navigate = useNavigate();
    const { pathname } = useLocation();
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
                open && <div className={styles.menu}>
                    <Link className={pathname === "/" ? styles.activeLink : styles.link} to="/" onClick={() => onNavigate("/")}>Home</Link>
                    <Link className={pathname === "/about" ? styles.activeLink : styles.link} to="/about" onClick={() => onNavigate("/about")}>About</Link>
                    <Link className={pathname === "/portfolio" ? styles.activeLink : styles.link} to="/portfolio" onClick={() => onNavigate("/portfolio")}>Portfolio</Link>
                    <Link className={pathname === "/contact" ? styles.activeLink : styles.link} to="/contact" onClick={() => onNavigate("/contact")}>Contact</Link>
                </div>
            }
        </>
    )
}

export default MobileNav