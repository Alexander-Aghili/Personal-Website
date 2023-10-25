import Image from 'next/image'
import style from "./Skill.module.css"

export default function Skill(props: {skill: SkillType}) {
    return (
        <div className={style.skillmain}>
            <a 
            href={props.skill.link} 
            target="_blank" rel="noopener noreferrer"
            className={style.skillbox}
            >
                <div>
                    <Image 
                    src={props.skill.image} 
                    alt={''}
                    width={40}
                    height={40}
                    className={style.image}
                    >


                    </Image>
                </div>
                <h4 className={style.title}>
                    {props.skill.title}
                </h4>
            </a>
        </div>
    );    
}