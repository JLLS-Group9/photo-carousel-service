import React from 'react';
import styles from './gallery.css';

const poplateGrid = (photos) => {
  let currentPhoto = 0;
  let previousRow = 0;
  let randRow;
  let finalGrid = [];
  let len = photos.length;

  while (currentPhoto < len) {
    while (randRow === previousRow) {
      randRow = Math.ceil(Math.random() * 3);
    }
    previousRow = randRow;
    let lastRow = len - currentPhoto;

    if (randRow === 1 || lastRow === 1) {
      finalGrid.push(
        <div>
          <img className ={styles.photo} id={currentPhoto} src={photos[currentPhoto]} width="100%"></img>
        </div>
      );
      currentPhoto += 1;
    } else if (randRow === 2 || lastRow === 2) {
      finalGrid.push(
        <div>
          <img className ={styles.photo} id={currentPhoto} src={photos[currentPhoto]} width="50%"></img>
          <img className ={styles.photo} id={currentPhoto + 1} src={photos[currentPhoto + 1]} width="50%"></img>
        </div>
      );
      currentPhoto += 2;
    } else if (randRow === 3 || lastRow === 3) {
      finalGrid.push(
        <div>
          <img className ={styles.photo} id={currentPhoto} src={photos[currentPhoto]} width="33%"></img>
          <img className ={styles.photo} id={currentPhoto + 1} src={photos[currentPhoto + 1]} width="33%"></img>
          <img className ={styles.photo} id={currentPhoto + 2} src={photos[currentPhoto + 2]} width="33%"></img>
        </div>
      );
      currentPhoto += 3;
    }
  }

  return finalGrid;
};

export default poplateGrid;