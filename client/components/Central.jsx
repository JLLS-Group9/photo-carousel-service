import React from 'react';
import styles from '../style.css';

const Central = ({listingInfo, numPhoto, toggleGallery}) => {

  let headers = listingInfo.topHeaders;

  if (listingInfo.photos) { // conditional to ensure listing info loaded to the page

    return (
      // inital three photo grid with headers and save and share button and the number of photos in listing
      // will refactor to be less messy
      <div className={styles.central}>
        {/* the photogrid */}
        <div className={styles.gridCentral} onClick={ () => { toggleGallery(); }}>
          <img className={styles.centralImageOne} src={listingInfo.photos[0]}></img>
          <img className={styles.centralImageTwo} src={listingInfo.photos[1]}></img>
          <img className={styles.centralImageThree} src={listingInfo.photos[2]}></img>
        </div>
        {/* the headers */}
        <div className={styles.headers}>
          {headers.forSale ? <span className={styles.headerBorder}>FOR SALE</span> : null}
          {headers.forRent ? <span className={styles.headerBorder}>FOR RENT</span> : null}
          {headers.underConstruction ? <span className={styles.headerBorder}>UNDER CONSTRUCTION</span> : null}
          {headers.isNew ? <span className={styles.headerBorder}>NEW</span> : null }
          {headers.pending ? <span className={styles.headerBorder}>PENDING</span> : null }
        </div>
        {/* the save button and share button */}
        <div className={styles.centralButtons}>
          <span className={styles.save}>Save</span>
          <span className={styles.share}> Share</span>
        </div>
        <div className={styles.photos}>{numPhoto}</div>

      </div>
    );
  } else { // used for the intial loading of the page
    return (<div>loading...</div>);
  }
};

export default Central;