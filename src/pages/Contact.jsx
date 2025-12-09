import styles from '../styles/AboutContactPages.module.css';
import contactImage from '../assets/ContactPage.gif';
import linkedIn from "../../public/LinkedInicon.png";
import { Link } from 'react-router-dom';


export default function Contact(){
    return <div className={styles.pageContainer}>
        <h1 className={styles.title}>Contact Page</h1>
        <div className={styles.twoColumnLayout}>
        <ul className={styles.leftColumn}>
            <li>Ignat Voronovich</li>
            <li>Address: Vilnius, Lithuania</li>
            <li>Email: hol1.visualcraft@gmaul.com</li>
            <li><Link to="https://www.linkedin.com/in/ignat-voronovich-313951241/"><img src={linkedIn} className={styles.icon}></img>: linked in</Link></li>
        </ul>
        <img src={contactImage} className={styles.rightColumn}></img>
        </div>
    </div>;
}