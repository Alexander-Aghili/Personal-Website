// components/Navbar.js
import Link from 'next/link';
import styles from './PostLayout.module.css';
import nav_styles from '../Navbar/Navbar.module.css'
import global_styles from '../../page.module.css'

export default function PostLayout(title: string, subtitle: string, date: string, contentHtml: string, returnLocation: string) {
    
    return (
        <div className={global_styles.main}>
            <nav>
                <a href={returnLocation} className={styles.backbutton}>&#8592;</a>
            </nav>
            <h1 className={styles.title}>
                {title}
            </h1>
            <h2 className={styles.subtitle}>
                {subtitle}
            </h2>
            <div>
                <div className={styles.post} dangerouslySetInnerHTML={{ __html: {contentHtml}.contentHtml}}></div>
            </div>
        </div>
    );
}