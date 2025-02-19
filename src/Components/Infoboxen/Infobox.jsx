import React from 'react';
import Button from "../Buttons/Button";
import styles from "./Infobox.module.css"

function Infobox() {
    return (
        <div className={styles.infobox}>
            <h2 className={styles.h2}>
                Willkommen bei PokeMart
            </h2>
            <p className={styles.p1}>
                Deine Quelle für
            </p>
            <p className={styles.p2}>
                Pokemon-Trainingsutensilien
            </p>
            <nav className={styles.nav}>
                <Button text="zum Shop"/>
                <Button text="mehr zu PokeMart"/>
            </nav>
        </div>
    );
}

export default Infobox;