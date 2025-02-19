import React from 'react';
import Navigation from "../Navigations/Navigation";
import Infobox from "../Infoboxen/Infobox";
import styles from "./Head.module.css"

function Head() {
    return (
        <div className={styles.headContainer}>
            <div className={styles.imgBox1}>
                <img className={styles.img} src="/Assets/img/Bild-Hintergrund-Rayquaza.jpg" alt="Rayquaza IMG"></img>
                <Navigation />
                <Infobox/>
            </div>
        </div>
    );
}

export default Head;