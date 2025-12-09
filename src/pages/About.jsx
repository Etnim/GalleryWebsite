import styles from '../styles/AboutContactPages.module.css';
import drawing from '../assets/about-page-drawing.jpg';

export default function About() {
    return <div className={styles.pageContainer}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.textContainer}>
            <p>Usually this section is meant to describe my professional attitude to design, main inspirations that led me to this path and refined methods of work. Although it might be appropriate for purely “business based” communication, I find it extremely boring.</p>
            <p>For all the business-related inquires I prefer my works to talk for me, about my design approach and skills.</p>
            <p>And if you still continue reading this then may God help you as I am about to bring a personal touch to this presentation. I love traveling and asking question “why?” to discover the depths of out cosmic existence. I find drinking alcohol inefficient to be called a party drug. So I prefer a stimulant drug caffeine, specifically in a form of traditional south American drink - Yerba Mate. Occasionally I might attend judo/jiu jitsu training sessions to tease my ego with wins against novices. I dream of the times when I will be a renowned designer and be able to put a 10k euros price tag for a logo design which would take me 2 weeks to make, while still having clients waiting in queue for my design services.</p>
            <p>But for now I am just a guy who loves moving pixels around to create meaning  ;)</p>
        </div>
        <img src={drawing} className={styles.aboutPageDrawing} />
        <p id={styles.comment}><i>If you wonder how I look like, this is how my girlfriend sees me,
            by the way, <a href="https://www.linkedin.com/in/anhelina-velychko-56047a240/" target="_blank"><b>she</b></a> is the one who built this website</i>
        </p>
    </div>;

}