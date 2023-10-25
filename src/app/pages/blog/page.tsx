"use client"
import blogs from './blog.json';
import Navbar from '@/app/components/Navbar/Navbar';
import styles from './page.module.css'
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
