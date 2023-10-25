import Image from 'next/image'
import style from "./Skill.module.css"

export default function Skill(props: {skill: Skill}) {
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
                    height={30}
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