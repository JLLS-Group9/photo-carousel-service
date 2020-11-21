import React, { useEffect, useState } from 'react';
import styles from './gallery.css';

const PhotoGrid = ({photos, toggleCarousel, addPlace}) => {

  let check = () => {
    let id = (event.target.id);

    toggleCarousel(id);
  };

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
          <div key={currentPhoto + 1} className={styles.oneColumns}>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 1} key={currentPhoto + 1} src={photos[currentPhoto]} width="100%"></img>
          </div>
        );
        currentPhoto += 1;
      } else if (randRow === 2 || lastRow === 2) {
        finalGrid.push(
          <div key={currentPhoto + 1} className ={styles.twoColumns}>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 1} key={currentPhoto + 1} src={photos[currentPhoto]} width="50%" height="70%"></img>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 2} key={currentPhoto + 2} src={photos[currentPhoto + 1]} width="50%" height="70%"></img>
          </div>
        );
        currentPhoto += 2;
      } else if (randRow === 3 || lastRow === 3) {
        finalGrid.push(
          <div key={currentPhoto + 1} className ={styles.threeColumns}>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 1} key={currentPhoto + 1} src={photos[currentPhoto]} width="33%" height="45%"></img>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 2} key={currentPhoto + 2} src={photos[currentPhoto + 1]} width="33%" height="45%"></img>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 3} key={currentPhoto + 3} src={photos[currentPhoto + 2]} width="33%" height="45%"></img>
          </div>
        );
        currentPhoto += 3;
      }
    }

    return finalGrid;
  };

  const [grid, setGrid] = useState(poplateGrid(photos));

  return (
    <div className={styles.gridContainer}>
      <div>
        {grid.map( (row) => { return row; })}
      </div>
    </div>
  );
};

export default PhotoGrid;