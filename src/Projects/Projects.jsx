import React from 'react';
import style from './Projects.module.css';
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={style.projectsBox}>
            <div className={style.container}>
                <h2 className={style.title}>
                    My projects
                </h2>
                <div className={style.projects}>
                    <Project title='Название проекта' discription='Опиcание проеката'/>
                    <Project title='Название проекта' discription='Опиcание проеката'/>
                    <Project title='Название проекта' discription='Опиcание проеката'/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
