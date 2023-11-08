import Image from 'next/image'
import style from './Software.module.css'

export default function Software(props: {software: SoftwareType}) {
    const image = "/static/images/github.png"
    return (
        <div className={style.softwaremain}>
            <a 
            href={props.software.link} 
            target="_blank" rel="noopener noreferrer"
            className={style.softwarebox}
            >
                <div>
                    <Image 
                    src={image} 
                    alt={''}
                    width={30}
                    height={30}
                    className={style.image}
                    >


                    </Image>
                </div>
                <div className={style.titleholder}>
                    <h4 className={style.title}>
                        {props.software.title}
                    </h4>
                </div>
            </a>
        </div>
    );
}