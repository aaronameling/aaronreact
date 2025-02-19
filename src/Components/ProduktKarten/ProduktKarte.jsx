import React from "react";
import styles from "./ProduktKarte.module.css"

function ProduktKarte(props) {
    return (
        <div >
            <div className={styles.produktKarte}>
                <img className={styles.produktIMG} src={props.src} alt={props.alt}></img>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.kategorie}>{props.text}</p>
                <span className={styles.btnContainer}>
                    <a className={styles.button} href="/">Jetzt Kaufen</a>
                </span>
            </div>
        </div>
    );
}

export default ProduktKarte;

