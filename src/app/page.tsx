import Image from 'next/image'
import React from 'react';
import styles from './page.module.css'
import Navbar from './components/Navbar/Navbar'
import profileImage from '../../public/static/images/p.jpeg'; // Import image
import introduction from '../../public/static/text/introduction';
import Socialbar from './components/Socialbar/Socialbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.homePage}>
        <div className={styles.smallBio}>
          <h1>
            Alexander Aghili
          </h1>
          <div className={styles.profileImage}>
          <div className={styles.circularProfileImage}>
            <Image
              src={profileImage}
              alt="Alexander Aghili's Profile"
              width={100} // Adjust the width as needed
              height={100} // Adjust the height as needed
            />
          </div>
          </div>
          <Socialbar/>
        </div>
        <div className={styles.introductionStatement}>
          {introduction}
        </div>
      </div>
    </main>
  )
}
