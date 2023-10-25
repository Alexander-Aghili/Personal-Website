import Skill from './Skill';
import skills from './Skills.json';

export default function SkillsContainer() {

    //Split all skills into multiple skills row and then put them in column wise
    return (
        <div>
            
        </div>
    );

}

export function SkillsRow(first: number, length: number, skills: Skill[]) {
    var rowSkills: Skill[] = [];
    for (var i = first; i < length; i++) {
        rowSkills[i-first] = skills[first];
    }

    //Return skillsRow elements (Row'd and space between)
    return (
        <div></div>  
    );

}
