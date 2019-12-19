import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return (
    <section id="section1" className={styles.about}>
      <h2>About Me</h2>
        <article>
          <p className={styles.text}>I am a student looking for enployment in IT industry preferably working with JS</p>
          <p className={styles.text}> You can view my complete info in my <a href="/CV/NemanjaKostovski_CV_English_2019.pdf" target="_blank">CV</a>.</p>
          <div>
            <p>My skills:</p>
            <p>Javascript (React)</p>
            <p>HTML5 and CSS3</p>
            <p>Git and Github</p>
          </div>
        </article>
      </section>
  )
}