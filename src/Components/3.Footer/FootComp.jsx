import React from "react";
import styles from "./FootComp.module.css"

function FootComp(props) {
    return (
        <div className={styles.footBox}>
            <span className={styles.topic}>{props.name}</span>
            <div className={styles.underline}></div>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
        </div>
    );
}

export default FootComp;