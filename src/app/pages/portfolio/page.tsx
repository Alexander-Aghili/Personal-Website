import projects from './projects.json';
import Navbar from '@/app/components/Navbar/Navbar';
import styles from './page.module.css'
import global_styles from '../../page.module.css'
import ListLayout from '../../components/ListLayout/list' 

const ProjectList = () => {
  return (
    <div className={styles.main}>
      <Navbar/>
      <ListLayout list={projects.Projects} />
    </div>
  );
};

export default ProjectList;
