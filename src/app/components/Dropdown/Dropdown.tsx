"use client"
import styles from './Dropdown.module.css'

//For now this is just a single layout for both blogs and projects 
//but can be easily seperated later for individual customization
export default function Dropdown(props: {title: string}){
    var open = false;
    return (
        <div 
            className={styles.main}
            onClick={() => {
                open = !open;
            }}
        >
            <p className={styles.arrow}>{'\u2B83'}</p>
            <p> {props.title} </p>
        </div>
    );
}