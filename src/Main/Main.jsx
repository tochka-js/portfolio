import React from 'react';
import style from './Main.module.css';
import photo from '../assets/images/1530544023_n6fgwzftnvg.jpg'

function Main(props) {
    return (
        <div className={style.mainBox}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <span>
                        <h1 className={style.myName}>My name is Stanislav Hitrikov</h1>
                    </span>
                    <span>I'm front-end developer</span>
                </div>
                <div className={style.photo}>

                    <img src={photo} alt="my photo"/>
                </div>
            </div>
        </div>
    );
}

export default Main;
