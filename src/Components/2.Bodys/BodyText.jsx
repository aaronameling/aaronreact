import React from 'react';
import styles from "./BodyText.module.css"

function BodyText() {
    return (
        <div>
            <p className={styles.textBox}>
                Entdecke den ultimativen Laden für alle Pokémon-Trainer! <br/>
                Bei uns findest du eineexklusive Auswahl an <br/>
                Pokémon-Trainingsutensilien, <br/>
                Sammlerstücken und seltenen Pokémon. <br/>
                Egal, ob du nach einer mächtigen Rayquaza-Actionfigur, <br/>
                einem kuscheligen Glurak-Plüschtier oder einer praktischen <br/>
                Shiggy-Wasserflasche suchst <br/>
                PokéMart hat alles, was das Trainer-Herz begehrt!
            </p>
        </div>
    );
}

export default BodyText;