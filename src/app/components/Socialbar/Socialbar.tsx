import Link from 'next/link';
import styles from './Socialbar.module.css';
import Navbar from '../Navbar/Navbar';

import React from 'react';

const Socialbar = () => {
  const githubUrl = 'https://github.com/Alexander-Aghili';
  const linkedinUrl = 'https://www.linkedin.com/in/alexanderaghili/';
  const resumeUrl = "http://localhost:3000/static/text/AlexanderAghili_Resume.pdf";

  return (
    <div className="social-bar">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/static/images/github.png" // Replace with the actual path to your GitHub logo
          alt="GitHub"
          className={styles.githubIcon}
          width={47}
          height={47}
        />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/static/images/linkedin_logo.webp" // Replace with the actual path to your LinkedIn logo
          alt="LinkedIn"
          className={styles.linkedinIcon}
          width={75}
          height={75}
        />
      </a>
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/static/images/file.png" // Replace with the actual path to your LinkedIn logo
          alt="Resume"
          className={styles.resumeIcon}
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default Socialbar;
