import React, { useEffect, useState } from 'react';
import styles from './carousel.css';

const Carousel = ({listingInfo, show, closeCarousel, place, addPlace, save}) => {

  const closeModal = () => {
    if (event.target.id === 'closeright' | event.target.id === 'closeleft') {
      closeCarousel();
    }
  };


  const changeplace = (direction, photoNum) => {
    if (direction === 'right') {
      place === photoNum ? place = 1 : place++;
    } else if (direction === 'left') {
      place === 1 ? place = photoNum : place--;
    }
    return place;
  };

  const buttonPress = () => {
    let photoNum = listingInfo.photos.length;
    let id = event.target.id;
    addPlace(changeplace(id, photoNum));
  };

  if (show) {
    return (
      <div>
        <div className={styles.Modal} onClick={closeModal} id="myCaroModal">
          {/*This is wrapper for the modal content */ }
          <div className={styles.ModalContent}>
            <div className={styles.header}>
              {listingInfo.address} | ${listingInfo.topHeaders.forRent ? (Math.round((listingInfo.price / 400) / 100 ) * 100).toLocaleString() + '+/mo' : listingInfo.price.toLocaleString()} | {listingInfo.bedroom} Beds {listingInfo.bathroom} Baths</div>
            <div className={styles.carousel}>
              <div onClick={() => { buttonPress(); }} className={styles.leftSlider} id={'left'}>
                <svg onClick={() => { buttonPress(); }} id={'left'} className={styles.leftsvg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#FFFFFF"/></svg>
              </div >
              <img className={styles.photoCarousel} src={listingInfo.photos[place - 1]}></img>
              <div onClick={() => { buttonPress(); }} id={'right'} className={styles.rightSlider} >
                <svg onClick={() => { buttonPress(); }} id={'right'} className={styles.rightsvg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#FFFFFF"/></svg>
              </div>
            </div>
            <div className={styles.photoNumber}>{place} of {listingInfo.photos.length}</div>
            <div className={styles.closeLeft} onClick={closeModal} id="closeleft"></div>
            <div className={styles.closeRight} onClick={closeModal} id="closeright"></div>
            <div className={styles.carouselButtons}>
              <span className={listingInfo.saved ? styles.save : styles.isSaved} onClick={()=> { save(); }}>Save</span>
              <span className={styles.share}>Share</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Carousel;