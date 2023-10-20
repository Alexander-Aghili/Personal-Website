import styles from './list.module.css'
import Image from 'next/image'


//For now this is just a single layout for both blogs and projects 
//but can be easily seperated later for individual customization
export default function ListLayout(props: { list: { Title: string; Project_Location: string; Image_Location: string; Description: string; Date: string; }[] }){
  return (
    <ul className={styles.ul}>
        {props.list.map((item, index) => (
          <li key={index}>
            <a className={styles.licontainer} href={item.Project_Location}>
              <div className={styles.titlelayer}>
                <h2 className={styles.baseheader}>{item.Title}</h2>
                <h3 className={styles.dateheader}>
                    {item.Date}
                </h3>
              </div>
              <div className={styles.imagedescriptionlayer}>
                <Image className={styles.thumbnail} src={item.Image_Location} alt={'Main Image'} width={150} height={150}/>
                <div className={styles.basetext}>
                  {item.Description}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
  );
}