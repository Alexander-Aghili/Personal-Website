import Image from 'next/image'
import React from 'react';
import styles from './page.module.css'
import Navbar from './components/Navbar'
import profileImage from './p.jpeg'; // Import image


export default function Home() {


  return (
    <main className={styles.main}>
      <Navbar />
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
      <div className={styles.description}>
        <p>
          Welcome to My Personal Website!
        </p>
      </div>

      
    </main>
  )
}
