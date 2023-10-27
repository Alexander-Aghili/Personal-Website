"use client"
import React, { useState } from 'react';
import styles from './Dropdown.module.css'

export default function Dropdown(props: {title: string, content: any}){
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.main}>
            <div className={styles.displayBox}>
                <div className={styles.header} onClick={() => setOpen((open) => !open)}>
                    <Dropdown.Arrow open={open}></Dropdown.Arrow>
                    <h3> {props.title} </h3>
                </div>
                <Dropdown.Content open={open} children={props.content}></Dropdown.Content>
            </div>
        </div>
    );
}

Dropdown.Arrow = function DropdownArrow(props: {open: boolean}) {
    return props.open ? <p className={styles.arrowOpen}>{'\u2B83'}</p> : 
    <p className={styles.arrow}>{'\u2B83'}</p>;
}

Dropdown.Content = function DropdownContent(props: {children: any, open: boolean}) {
    return props.open ? <div className={styles.content}>{props.children}</div> : null; 
}

