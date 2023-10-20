"use client"
import blogs from './blog.json';
import Navbar from '@/app/components/Navbar/Navbar';
import styles from './page.module.css'
import global_styles from '../../page.module.css'
import Image from 'next/image';
import ListLayout from '@/app/components/ListLayout/list';

const ProjectList = () => {
  return (
    <div className={styles.main}>
      <Navbar/>
      <ListLayout list={blogs.Blogs} />
    </div>
  );
};

export default ProjectList;
