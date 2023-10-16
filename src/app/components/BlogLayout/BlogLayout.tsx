// components/Navbar.js
import Link from 'next/link';
import styles from './BlogLayout.module.css';
import Navbar from '../Navbar/Navbar';
import global_styles from '../../page.module.css'

export default function BlogLayout(title: string, date: string, contentHtml: string) {
    return (
        <div className={global_styles.main}>
            <Navbar></Navbar>
            <h1 className={styles.title}>
                {title}
            </h1>
            <div>
                <div className={styles.blog} dangerouslySetInnerHTML={{ __html: {contentHtml}.contentHtml}}></div>
            </div>
        </div>
    );
}