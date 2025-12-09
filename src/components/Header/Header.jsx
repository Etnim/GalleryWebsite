import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../../public/WhiteLogo.png";

function Header() {
    return (
        <header>
            <nav className={styles.navbar}>
                <Link to="/GalleryWebsite/"><img id={styles.logo} src={logo} /></Link>
                <ul>
                    <Link to="/GalleryWebsite/contact/"><li>CONTACT</li></Link>
                    <Link to="/GalleryWebsite/about/"><li>ABOUT</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;