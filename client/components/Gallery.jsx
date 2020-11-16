import React from 'react';
import styles from '../style.css';

const Gallery = ({listingInfo}) => {

  if (listingInfo.photos) {
    return (
      <div>
        <div>

        </div>
        <div>{listingInfo.address} | ${listingInfo.price.toLocaleString()} | {listingInfo.bedroom} Beds {listingInfo.bathroom} Baths</div>
      </div>
    );
  } else {
    return null;
  }


};

export default Gallery;