import Skill from './Skill';
import skills from './Skills.json';
import style from './Skills.module.css';

export default function SkillsContainer() {

    //Split all skills into multiple skills row and then put them in column wise
    return (
        <div className={style.skillsContainer}>
            {
               SkillsRowed(skills.Skills).map((skillsRow) => {
                    return (
                        skillsRow
                    );
               })
            }
        </div>
    );

}

export function SkillsRowed(skills: SkillType[]) {
    const total = skills.length;
    const rowAmount = 4;
    const totalRows = Math.ceil(total / rowAmount);
    var skillsRow: any[] = [];

    for (var i = 0; i < totalRows - 1; i++) {
        skillsRow[i] = SkillsRow(i * rowAmount, rowAmount, skills);
    }
    skillsRow[totalRows - 1] = SkillsRow((totalRows - 1) * rowAmount, total % rowAmount, skills);

    return skillsRow;
}

export function SkillsRow(first: number, length: number, skills: SkillType[]) {
    var rowSkills: SkillType[] = [];
    for (var i = first; i < length; i++) {
        rowSkills[i-first] = skills[first+i];
    }

    //Return skillsRow elements (Row'd and space between)
    return (
        <div className={style.skillsRow}>
            {rowSkills.map((skill) => {
                return (<Skill skill={skill}></Skill>);
            })}
        </div>
    );

}
