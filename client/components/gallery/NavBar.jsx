import React from 'react';
import styles from './gallery.css';

const NavBar = (props) => (
  <div>
    <div className={styles.navBar}>
      <span className={styles.navborders}>Photos</span>
      <span className={styles.navborders}>Map</span>
      <span className={styles.navborders}>Street View</span>
      <span className={styles.navborders}>Schools</span>
      <span className={styles.navborders}>Crime</span>
      <span className={styles.navborders}>Commute</span>
      <span className={styles.navborders}>Stop {'&'} Stop</span>
    </div>
  </div>
);

export default NavBar;