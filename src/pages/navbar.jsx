import React, { useState, useEffect, useRef } from "react";
import styles from "../css/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeButton, setActiveButton] = useState("Home");
    const [underlineStyle, setUnderlineStyle] = useState({});
    const navButtonsRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = (buttonName, index) => {
        setActiveButton(buttonName);
        moveUnderline(index);
        if (isOpen) {
            setIsOpen(false); // Close the menu on button click
        }
        if (buttonName === 'Home') {
            <Link to={`/`}></Link>
        } else if (buttonName === 'Skills') {   
            <Link to={`/skills`}></Link>
        }
    };

    const moveUnderline = (index) => {
        const button = navButtonsRef.current.children[index];
        if (button) {
            const { offsetLeft, offsetWidth } = button;
            setUnderlineStyle({
                width: offsetWidth,
                transform: `translateX(${offsetLeft}px)`,
            });
        }
    };

    useEffect(() => {
        // Initialize the underline on the default active button
        const defaultIndex = [...navButtonsRef.current.children].findIndex(child => child.textContent === activeButton);
        moveUnderline(defaultIndex);
    }, [activeButton]);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.High_parent}>
            <div className={styles.parent}>
                <div className={styles.subparent}>
                    <img className={styles.navicon} src="./assets/images/navicon.png" alt="navbar icon" />
                    <div className={styles.navbuttons} ref={navButtonsRef}>
                        <div className={styles.underline} style={underlineStyle}></div>
                        <Link
                            to="/"
                            className={`${styles.navbutton} ${activeButton === "Home" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Home", 0)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/skills"
                            className={`${styles.navbutton} ${activeButton === "Skills" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Skills", 1)}
                        >
                            Skills
                        </Link>
                        <p
                            className={`${styles.navbutton} ${activeButton === "Education" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Education", 2)}
                        >
                            Education
                        </p>
                        <p
                            className={`${styles.navbutton} ${activeButton === "Projects" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Projects", 3)}
                        >
                            Projects
                        </p>
                        <p
                            className={`${styles.navbutton} ${activeButton === "Recommendations" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Recommendations", 4)}
                        >
                            Recommendations
                        </p>
                        <p
                            className={`${styles.navbutton} ${activeButton === "Contact" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Contact", 5)}
                        >
                            Contact
                        </p>
                    </div>
                </div>
                <div className={`${styles.menuicon} ${isOpen ? styles.open : ''}`} onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.menuscreen} ${isOpen ? styles.open : ''}`}>
                    <div className={styles.underline} style={underlineStyle}></div>
                    <Link
                            to="/"
                            className={`${styles.navbutton} ${activeButton === "Home" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Home", 0)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/skills"
                            className={`${styles.navbutton} ${activeButton === "Skills" ? styles.active : ""}`}
                            onClick={() => handleButtonClick("Skills", 1)}
                        >
                            Skills
                        </Link>
                    <p
                        className={`${styles.navbutton} ${activeButton === "Education" ? styles.active1 : ""}`}
                        onClick={() => handleButtonClick("Education", 2)}
                    >
                        Education
                    </p>
                    <p
                        className={`${styles.navbutton} ${activeButton === "Projects" ? styles.active1 : ""}`}
                        onClick={() => handleButtonClick("Projects", 3)}
                    >
                        Projects
                    </p>
                    <p
                        className={`${styles.navbutton} ${activeButton === "Recommendations" ? styles.active1 : ""}`}
                        onClick={() => handleButtonClick("Recommendations", 4)}
                    >
                        Recommendations
                    </p>
                    <p
                        className={`${styles.navbutton} ${activeButton === "Contact" ? styles.active1 : ""}`}
                        onClick={() => handleButtonClick("Contact", 5)}
                    >
                        Contact
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
