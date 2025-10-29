import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <Link to="/"><img id={styles.logo} src={"WhiteLogo.png"} /></Link>
                <ul>
                    <Link to="/contact/"><li>CONTACT</li></Link>
                    <Link to="/about/"><li>ABOUT</li></Link>
                    <Link to="https://www.linkedin.com/in/ignat-voronovich-313951241/"> <li><img src={"LinkedInicon.png"}></img></li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;