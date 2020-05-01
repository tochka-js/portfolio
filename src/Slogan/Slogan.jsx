import React from 'react';
import style from './Slogan.module.css';


function Slogan() {
    return (
        <div className={style.sloganBox}>
            <div className={style.container}>
                <h2 className={style.title}>
                    I consider options for remote work
                </h2>
                <button className={style.button}>Hire me</button>
            </div>


        </div>
    );
}

export default Slogan;
