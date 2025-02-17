import React from 'react';
import Button from "../Buttons/Button";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.nav}>
                <Button text="Produkte"/>
                <Button text="Kontakt"/>
                <Button text="Über uns"/>
            </nav>
        </div>
    );
}

export default Navigation;