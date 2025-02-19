import React from 'react';
import ProduktKarte from "../ProduktKarten/ProduktKarte";
import styles from "./BodyProdukt.module.css"

function BodyProdukt() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.imgBox2}>
                <img className={styles.img} src="/Assets/img/Bild-Hintergrund-Produkte.jpg" alt="Rayquaza IMG"></img>
                <div className={styles.produktBox}>
                    <ProduktKarte src="/Assets/img/Rayquaza Actionfigur.png" alt="Rayquaza IMG" name="Rayquaza" text="Actionfigur" />
                    <ProduktKarte src="/Assets/img/ShinyGlurak.png" alt="Glurak IMG" name="Glurak" text="Plüschtier"/>
                    <ProduktKarte src="/Assets/img/Mewtwo Actionfigur.png" alt="Mewtwo IMG" name="Mewtwo" text="Actionfigur"/>
                </div>
            </div>
        </div>
    );
}

export default BodyProdukt;
