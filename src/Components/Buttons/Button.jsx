import React from 'react';
import styles from './Button.module.css'

function Button(props) {
    return (
        <>
            <button className={styles.buttonContainer}>{props.text}</button>
        </>
    );
}

export default Button;