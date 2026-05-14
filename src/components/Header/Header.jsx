import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../../../public/WhiteLogo.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const location = useLocation();

    const menuAreaRef = useRef(null);
    const lastScrollYRef = useRef(0);
    const tickingRef = useRef(false);

    const isProjectPage = /^\/\d+\/?$/.test(location.pathname);

    const toggleMenu = () => {
        setIsOpen((currentValue) => !currentValue);
    };

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuAreaRef.current && !menuAreaRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsNavVisible(true);
        setIsOpen(false);
        lastScrollYRef.current = window.scrollY;
    }, [location.pathname]);

    useEffect(() => {
        if (!isProjectPage) {
            setIsNavVisible(true);
            return;
        }

        const handleScroll = () => {
            if (tickingRef.current) return;

            tickingRef.current = true;

            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const lastScrollY = lastScrollYRef.current;
                const scrollDifference = currentScrollY - lastScrollY;

                if (isOpen) {
                    setIsNavVisible(true);
                } else if (currentScrollY < 40) {
                    setIsNavVisible(true);
                } else if (scrollDifference > 1) {
                    setIsNavVisible(false);
                } else if (scrollDifference < -1) {
                    setIsNavVisible(true);
                }

                lastScrollYRef.current = currentScrollY;
                tickingRef.current = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen, isProjectPage]);

    return (
        <header
            className={`${styles.headerWrapper} ${
                isNavVisible ? styles.headerVisible : styles.headerHidden
            }`}
        >
            <nav className={styles.navbar}>
                <Link to="/" onClick={closeMenu}>
                    <img id={styles.logo} src={logo} alt="Holy Graphics logo" />
                </Link>

                <ul className={styles.menuItems}>
                    <li><Link to="/contact/">Contact</Link></li>
                    <li><Link to="/about/">About</Link></li>
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
                        <li><Link to="/contact/" onClick={closeMenu}>Contact</Link></li>
                        <li><Link to="/about/" onClick={closeMenu}>About</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;