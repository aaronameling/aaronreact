import React from 'react';
import Button from "../Buttons/Button";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <img className={styles.icon} src="/Assets/img/Bild-PokeMartGo-Icon.png" alt="PokeMartGo"></img>
                <div className={styles.menu}>
                    <Button text="Produkte"/>
                    <Button text="Kontakt"/>
                    <Button text="Über uns"/>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;