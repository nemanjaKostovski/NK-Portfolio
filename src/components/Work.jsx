import React from 'react';
import styles from './Work.module.css';

export const Work = () => {
  return (
    <section id="section2" className={styles.work}>
      <div>
        <h1>My work</h1>
        <p>You can check out my projects on the links below</p>
      </div>
      <div id="js-projects">
        <p className={styles.text}>JavaScript projects:</p>
        <div>In Progress...</div>
      </div>
      <div id="codepens">
        <p>Other projects(codepen):</p>
        <a className={styles.imglinks} href="https://codepen.io/mongoloid14/pen/mgERay" target="_blank" rel="noopener noreferrer"><img className={styles.codepen} src="/images/form.png" alt="Codepen-Form" /></a>
        <a className={styles.imglinks} href="https://codepen.io/mongoloid14/pen/JVMrrK" target="_blank" rel="noopener noreferrer"><img className={styles.codepen} src="/images/corp.png" alt="Company" /></a>
        <a className={styles.imglinks} href="https://codepen.io/mongoloid14/pen/QPEypQ" target="_blank" rel="noopener noreferrer"><img className={styles.codepen} src="/images/tribute.png" alt="Tribute" /></a>
      </div>
    </section>
  )
}