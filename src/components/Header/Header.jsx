import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../../../public/WhiteLogo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuAreaRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuAreaRef.current && !menuAreaRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header>
            <nav className={styles.navbar}>
                <Link to="/"><img id={styles.logo} src={logo} /></Link>

                <ul className={styles.menuItems}>
                    <li><Link to="/contact/">CONTACT</Link></li>
                    <li><Link to="/about/">ABOUT</Link></li>
                </ul>

                <ul className={isOpen ? styles.menuItemsOpen : styles.menuItemsHidden}>
                    <li><Link to="/contact/">CONTACT</Link></li>
                    <li><Link to="/about/">ABOUT</Link></li>
                </ul>

                <div ref={menuAreaRef} className={styles.mobileMenuWrap}>
                    <div
                        className={styles.menuTrigger}
                        onClick={toggleMenu}
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
                    >
                        <span className={styles.burgerBar} />
                        <span className={styles.burgerBar} />
                        <span className={styles.burgerBar} />
                    </div>

                    <ul className={isOpen ? styles.menuItemsOpen : styles.menuItemsHidden}>
                        <li><Link to="/contact/" onClick={closeMenu}>CONTACT</Link></li>
                        <li><Link to="/about/" onClick={closeMenu}>ABOUT</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;