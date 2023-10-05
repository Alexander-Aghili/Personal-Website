import projects from './projects.json';
import Navbar from '@/app/components/Navbar';
import styles from './page.module.css'


const ProjectList = () => {
  return (
    <div className={styles.main}>
      <Navbar/>
      <ul className={styles.ul}>
        {projects.Projects.map((project, index) => (
          <li key={index}>
            <a className={styles.licontainer} href={project.Project_Location}>
              <h2 className="baseheader">{project.Title}</h2>
              <div className="basetext">{project.Description}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
