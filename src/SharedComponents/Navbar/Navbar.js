import React from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from "react-router-dom"

export const Navbar = () => {

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    const navigate = useNavigate()

    const handleHome = () => {
        navigate("/");
    }

    const handleExp = () => {
        navigate("/experiments")
    }

    const handleAbout = () => {
        navigate("/about")
    }

    // const handleScroll = () => {
    //     if (window.scrollY > 159)
    //         setChangeNav(true)
    //     else
    //         setChangeNav(false)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // })

    return (
        <nav className={`${styles.navbar} container`}>
            <div className={styles.logos}>
                <img className={styles.eLogo} alt="" src="/Images/Elabslogo.png" />
                <hr className={styles.logoBreaker} />
                <div className={styles.brandStyle}>
                    <img className={styles.logo} alt="" src="/Images/Indian_Institute_of_Technology_Roorkee_logo.png"></img>
                    <span className={styles.logoText}>
                        <span className={styles.logoTextHindi}>
                            <span>भारतीय</span>
                            <span>प्रौद्योगिकी</span>
                            <span>संस्थान</span>
                            <span>रुड़की</span>
                        </span>
                        <span className={styles.logoTextEng}>Indian Instiute of Technology Roorkee</span>
                    </span>
                </div>
            </div>
            <hr className={styles.logoLineBreak} />
            <div className={styles.navMenu}>
                <div className={styles.leftMenu}>
                    <button className={`${styles.btnss} ${id === "" && styles.selected}`} onClick={handleHome}>
                        Home
                    </button>
                    <button className={`${styles.btnss} ${id === "about" && styles.selected}`} onClick={handleAbout}>
                        About
                    </button>
                    <button className={`${styles.btnss} ${id === "experiments" && styles.selected}`} onClick={handleExp}>
                        Experiments
                    </button>
                    <button className={`${styles.btnss} ${id === "contact" && styles.selected}`}>
                        Contact Us
                    </button>
                </div>
                <div className={styles.rightMenu}>
                    <button className={styles.btnss}>
                        Login
                    </button>
                    <button className={styles.btnss}>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}
