import React from 'react';
import NavBar from './NavBar.jsx';
import PhotoGrid from './PhotoGrid.jsx';
import Form from './Form.jsx';
import styles from './gallery.css';

const Gallery = ({listingInfo, show, toggleGallery, toggleCarousel, addPlace, save}) => {


  const closeModal = () => {
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
      toggleGallery();
    }
  };

  //if show is true modal is shown
  if (show) {

    return (
      <div>
        <div className={styles.Modal} onClick={closeModal} id="myModal">
          {/*This is wrapper for the modal content */ }
          <div className={styles.ModalContent}>
            <NavBar save={save} listingInfo={listingInfo} toggleGallery={toggleGallery}/>
            <div className={styles.listingHeader}>{listingInfo.address} | ${listingInfo.topHeaders.forRent ? (Math.round((listingInfo.price / 400) / 100 ) * 100).toLocaleString() + '+/mo' : listingInfo.price.toLocaleString()} | {listingInfo.bedroom} Beds {listingInfo.bathroom} Baths</div>
            <PhotoGrid photos={listingInfo.photos} toggleCarousel={toggleCarousel} addPlace={addPlace}/>
            <Form />

          </div>
        </div>
      </div>
    );

  } else {
    return null;
  }


};

export default Gallery;