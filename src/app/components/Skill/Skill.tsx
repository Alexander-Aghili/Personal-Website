import Image from 'next/image'
import style from "./Skill.module.css"

export default function Skill(props: {skill: SkillType}) {
    props.skill.image = "/static/images/skills/" + props.skill.image; 
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
                    width={30}
                    height={35}
                    className={style.image}
                    >


                    </Image>
                </div>
                <div className={style.titleholder}>
                    <h4 className={style.title}>
                        {props.skill.title}
                    </h4>
                </div>
            </a>
        </div>
    );    
}