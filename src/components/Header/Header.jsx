import styles from "./Header.module.css";

function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <a href="#home"><img id={styles.logo} src={"WhiteLogo.png"}/></a>
                <ul>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="https://www.linkedin.com/in/ignat-voronovich-313951241/"><img src={"LinkedInicon.png"}></img></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;