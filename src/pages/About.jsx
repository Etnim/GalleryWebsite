import styles from '../styles/AboutContactPages.module.css';
import drawing from '../assets/about-page-drawing.jpg';

export default function About() {
    return <div className={styles.pageContainer}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.textContainer}>
            <p>Welcome to my website, friend.</p>
            <p>My name is Ignat and I am a multidisciplinary graphic designer.</p>
            <p>I am on my journey of exploring, experiencing and learning all the aspects of design.</p>
            <p>Branding, Graphic, Product, Typography and all the other parts of the design ocean.</p>
            <p>And at the end of this journey I am hoping to comprehend the grandest design aspect...</p>
            <p>The Design of Life.</p>
        </div>
        <img src={drawing} className={styles.aboutPageDrawing} />
        <p>If you wonder how I look like, this is how my girlfriend sees me.</p>
        <p>By the way, <a href="https://www.linkedin.com/in/anhelina-velychko-56047a240/" target="_blank"><b id={styles.she}>she</b></a> is the one who built this website.</p>
    </div>;

}