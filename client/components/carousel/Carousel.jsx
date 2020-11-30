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
    event.preventDefault();
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
                <svg id={'left'} className={styles.leftsvg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" fill="#FFFFFF"/></svg>
              </div >

              <img className={styles.photoCarousel} id={Math.random()} key={Math.random()} src={listingInfo.photos[place - 1]}></img>

              <div onClick={() => { buttonPress(); }} id={'right'} className={styles.rightSlider} >
                <svg id={'right'} className={styles.rightsvg} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#FFFFFF"/></svg>
              </div>


            </div>
            <div className={styles.photoNumber}>{place} of {listingInfo.photos.length}</div>
            <div className={styles.closeLeft} onClick={closeModal} id="closeleft"></div>
            <div className={styles.closeRight} onClick={closeModal} id="closeright"></div>
            <div className={styles.carouselButtons}>
              <span className={styles.save} onClick={()=> { save(); }}>
                <svg className={styles.heartsvg} width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  {listingInfo.saved ? <path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="rgb(255, 94, 63)"></path> : <path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="rgb(0, 120, 130)"></path>}

                </svg>
                Save
              </span>
              <span className={styles.share}>
                <svg className={styles.sharesvg} width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="rgb(0, 120, 130)"></path>
                </svg> Share</span>
                <span className={styles.closesvg} onClick={() => { closeCarousel(); } }>
                  <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path className={styles.cover} d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="#869099"></path></svg>
                </span>
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