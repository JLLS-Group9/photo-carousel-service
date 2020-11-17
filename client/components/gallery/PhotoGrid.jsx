import React from 'react';
import styles from './gallery.css';
import { poplateGrid } from './gridBuilder.jsx';

const PhotoGrid = ({photos, toggleCarousel}) => {

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
          <div className ={styles.onethreeColumns}>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 1} src={photos[currentPhoto]} width="100%"></img>
          </div>
        );
        currentPhoto += 1;
      } else if (randRow === 2 || lastRow === 2) {
        finalGrid.push(
          <div className ={styles.twoColumns}>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 1} src={photos[currentPhoto]} width="50%" height="60%"></img>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 2} src={photos[currentPhoto + 1]} width="50%" height="60%"></img>
          </div>
        );
        currentPhoto += 2;
      } else if (randRow === 3 || lastRow === 3) {
        finalGrid.push(
          <div className ={styles.threeColumns}>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 1} src={photos[currentPhoto]} width="33%" height="45%"></img>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 2} src={photos[currentPhoto + 1]} width="33%" height="45%"></img>
            <img onClick={() => { check(); }} className ={styles.photo} id={currentPhoto + 3} src={photos[currentPhoto + 2]} width="33%" height="45%"></img>
          </div>
        );
        currentPhoto += 3;
      }
    }

    return finalGrid;
  };

  let grid = poplateGrid(photos);

  return (
    <div>
      <div className={styles.gridContainer}>
        <div>
          {grid.map( (row) => { return row; })}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;