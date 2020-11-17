import React from 'react';
import NavBar from './NavBar.jsx';
import PhotoGrid from './PhotoGrid.jsx';
import styles from './gallery.css';

const Gallery = ({listingInfo, show, toggleGallery, toggleCarousel}) => {


  const closeModal = () => {
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
      toggleGallery();
    }
  };

  if (show) {

    return (
      <div>
        <div className={styles.Modal} onClick={closeModal} id="myModal">
          <div className={styles.ModalContent}>
            <NavBar />
            <div className={styles.listingHeader}>{listingInfo.address} | ${listingInfo.price.toLocaleString()} | {listingInfo.bedroom} Beds {listingInfo.bathroom} Baths</div>
            <PhotoGrid photos={listingInfo.photos} toggleCarousel={toggleCarousel}/>
          </div>
        </div>
      </div>
    );

  } else {
    return null;
  }


};

export default Gallery;