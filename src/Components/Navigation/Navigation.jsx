import React from 'react';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <>
            <nav className={styles.navigation}>
                <ul className={styles.ul}>
                    <li>Produkte</li>
                    <li>Über uns</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;