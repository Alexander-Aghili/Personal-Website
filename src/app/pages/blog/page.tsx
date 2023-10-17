"use client"
import blogs from './blog.json';
import Navbar from '@/app/components/Navbar/Navbar';
import styles from './page.module.css'
import global_styles from '../../page.module.css'
import Image from 'next/image';

const ProjectList = () => {
  return (
    <div className={global_styles.main}>
      <Navbar/>
      <ul className={styles.ul}>
        {blogs.Blogs.map((blog, index) => (
          <li key={index}>
            <a className={styles.licontainer} href={blog.Project_Location}>
              <div className={styles.titlelayer}>
                <h2 className={styles.baseheader}>{blog.Title}</h2>
                <h3>
                    {blog.Date}
                    <style jsx>{`
                        h3{color: gray;}
                    `}</style>
                </h3>
              </div>
              <div className={styles.imagedescriptionlayer}>
                <Image className={styles.thumbnail} src={blog.Image_Location} alt={'Blog Image'} width={150} height={150}/>
                <div className={styles.basetext}>
                  Exploring the abandonded bohemian living space of Druid Heights in Muir Woods.
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
