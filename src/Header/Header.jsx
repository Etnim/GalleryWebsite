import styles from "./Header.module.css";
import LinkedInIcon from '../assets/LinkedInicon.png'

function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <a href="#home">Logo</a>
                <ul>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="https://www.linkedin.com/in/ignat-voronovich-313951241/"><img src={LinkedInIcon}></img></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;