import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link
            className={styles.menu}
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {1000}
          >About</Link>
          <Link
            className={styles.menu}
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {1000}
          >Work</Link>
          <Link
            className={styles.menu}
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {1000}
          >Contact</Link>
        </ul>
      </nav>
    </header>
  )
}