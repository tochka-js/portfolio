import React from 'react';
import style from './Skills.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBox}>
            <div className={style.container}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.mySkills}>
                    <Skill title='HTML, CSS' description='Здесь будет описание моих скилов по HTML, CSS'/>
                    <Skill title='Java Script' description='Здесь будет описание моих скилов по JS'/>
                    <Skill title='Type Script' description='Здесь будет описание моих скилов по JS'/>
                    <Skill title='React' description='Здесь будет описание моих скилов по REACT'/>
                    <Skill title='Redux' description='Здесь будет описание моих скилов по REDUX'/>


                </div>
            </div>
        </div>


    );
}

export default Skills;
