import React from 'react';
import styles from './style.css';

const Central = ({listingInfo, numPhoto, toggleGallery, save}) => {

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
          <span className={styles.save} onClick={()=> { save(); }}>
            <svg className={styles.heartsvg} width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              {listingInfo.saved ? <path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="rgb(255, 94, 63)"></path> : <path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="rgb(0, 120, 130)"></path>}

            </svg>
            Save
          </span>
          <span className={styles.share}>
            <svg className={styles.sharesvg} width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="rgb(0, 120, 130)"></path>
            </svg> Share</span>
        </div>
        <div className={styles.photos} onClick={ () => { toggleGallery(); }} >
          <svg className={styles.photosvg} width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M6.65 20.335l4.305-4.784 3.519 3.22 5.949-7.848 4.847 8.143V6.65H6.65v13.685zm0 3.976v.959h18.62v-1.003l-5.113-8.59-5.326 7.027-3.693-3.38-4.488 4.987zM27.93 3.99v23.94H3.99V3.99h23.94zM13.965 13.3a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99z" fill="#FFFFFF"></path></svg>{numPhoto}</div>

      </div>
    );
  } else { // used for the intial loading of the page
    return (<div>loading...</div>);
  }
};

export default Central;