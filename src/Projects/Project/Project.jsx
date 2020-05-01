import React from 'react';
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div>{props.title}</div>
            <div>{props.discription}</div>
        </div>
    );
}

export default Project;
