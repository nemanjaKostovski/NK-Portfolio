import React from 'react';
import styles from './Main.module.css';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';

export const Main = () => {

  return (
    <div>
    <main>
      <div className={styles.main}>
        <h1>Welcome</h1>
        <h1>My name is Nemanja Kostovski</h1>
        <h2>I am a JavaScript developer</h2>
      </div>
    </main>
    <About />
    <Work />
    <Contact />
    </div>
  )
}