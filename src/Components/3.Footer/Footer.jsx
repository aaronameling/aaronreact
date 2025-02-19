import React from "react";
import FootComp from "./FootComp"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.footContainer}>
            <div className={styles.footerBox}>
                <FootComp name="Kontakt" text1="a.ameling@systempiloten.de" text2="Mo-Fr 09.00-18.00 Uhr" text3="Sa 09.00-16.00 Uhr"/>
                <FootComp name="Info" text1="Impressum" text2="Datenschutzerklärung" text3="AGB"/>
                <FootComp name="Service" text1="Nachhaltigkeit" text2="Über uns" text3="Jobs & Karriere"/>
            </div>
        </div>
    );
}

export default Footer;