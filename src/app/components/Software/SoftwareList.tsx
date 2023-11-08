import software from './Software.json';
import Software from './Software';
import styles from './SoftwareList.module.css'

export default function SoftwareList() {
    return (
        <div>
            Here is free software that I like or find really useful
            <div className={styles.space}></div>
            <div className={styles.softwareListContainer}>
                {
                    software.Software.map((project) => {
                        return <Software software={project}></Software>;
                    })
                }
            </div>
        </div>
    );
}