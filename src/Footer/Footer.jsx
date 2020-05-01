import React from 'react';
import style from './Footer.module.css';
import Icon from "./Icon/Icon";

function Footer() {
    return (
        <div className={style.footerBox}>
            <div className={style.container}>
                <h2>
                    Stanislav Hitrikov
                </h2>
                <div className={style.icons}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>

                </div>
                <h3>
                    © 2020 All rights reserved
                </h3>
            </div>

        </div>
    );
}

export default Footer;
