import styles from '../styles/AboutContactPages.module.css';
import contactImage from '../assets/contactPage.gif';
import linkedIn from "../../public/LinkedInicon.png";

export default function Contact() {
    return <div className={styles.pageContainer}>
        <h1 className={styles.title}>Contacts</h1>
        <div className={styles.twoColumnLayout}>
            <ul className={styles.leftColumn}>
                <li>Ignat Voronovich</li>
                <li>Address: Vilnius, Lithuania</li>
                <li>Email: hol1.visualcraft@gmaul.com</li>
                <li><a href="https://www.linkedin.com/in/ignat-voronovich-313951241/" target="_blank"><img src={linkedIn} className={styles.icon}></img>: linked in</a></li>
            </ul>
            <img src={contactImage} className={styles.rightColumn}></img>
        </div>
    </div>;
}