import styles from '../styles/AboutContactPages.module.css';
import contactImage from '../assets/hands.gif';
import linkedIn from "../../public/LinkedInicon.png";
import gmail from "../../public/GmailIcon.png";


export default function Contact() {
    return <div className={styles.pageContainer}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.twoColumnLayout}>
            <div className={styles.leftColumn}>
                <p id={styles.name}>Ignat Voronovich</p>
                <p>Vilnius, Lithuania</p>
                <ul className={styles.contactIcons}>
                    <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=hol1.visualcraft@gmail.com"
                        target="_blank">
                            <img src={gmail} className={styles.icon} />
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/ignat-voronovich-313951241/" target="_blank"><img src={linkedIn} className={styles.icon}></img></a></li>
                </ul>
            </div>
            <img src={contactImage} className={styles.rightColumn}></img>
        </div>
    </div>;
}