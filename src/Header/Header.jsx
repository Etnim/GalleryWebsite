import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <a href="#home">Logo</a>
                <ul>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#about">SOACIALS</a></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;