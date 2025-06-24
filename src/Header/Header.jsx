import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <h1 className={styles.h1}>My website</h1>
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header;