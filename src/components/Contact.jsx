import React from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <section id="section3" className={styles.contact}>
      <div className={styles.information}>
        <h2>Contact Me</h2>
        <p>Email address: nemanjakostovski@gmail.com</p>
      </div>
      <div>
        <a href="https://github.com/nemanjaKostovski" className={styles.icons} target="_blank" rel="noopener noreferrer"><img className={styles.icons} src="../images/icons8-github-50.png" alt="github" /></a>
        <a href="https://www.facebook.com/nemanjakostovski14" className={styles.icons} target="_blank" rel="noopener noreferrer"><img className={styles.icons} src="../images/icons8-facebook-48.png" alt="facebook" /></a>
        <a href="https://www.linkedin.com/in/nemanja-kostovski-89a440125/" className={styles.icons} target="_blank" rel="noopener noreferrer"><img  className={styles.icons} src="../images/icons8-linkedin-48.png" alt="linkedin" /></a>
      </div>
    </section>
  )
}