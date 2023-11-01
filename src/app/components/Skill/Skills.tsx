import Skill from './Skill';
import skills from './Skills.json';
import style from './Skills.module.css';
import React from 'react';

export default function SkillsContainer() {
    //Split all skills into multiple skills row and then put them in column wise
    return (
        <div className={style.skillscontainer}>
            {
               skills.Skills.map((skill) => {
                    return (<Skill skill={skill}></Skill>);
               })
            }
        </div>
    );

}