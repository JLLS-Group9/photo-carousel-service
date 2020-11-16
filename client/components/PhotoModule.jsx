import React from 'react';
import Central from './Central.jsx';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class PhotoModule extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingInfo: {},
      showGallery: false,
      showCarousel: false,
      numPhoto: 0
    };
    this.updateData = this.updateData.bind(this);
    this.getEndpoint = this.getEndpoint.bind(this);
  }

  componentDidMount() {
    this.updateData();
  }


  getEndpoint() {
    return window.location.href;
  }

  // get listing data from endpoint id number
  updateData() {
    axios.get(`${this.getEndpoint()}listing`)
      .then(res => {
        this.setState({
          listingInfo: res.data,
          numPhoto: res.data.photos.length
        });
      })
      .catch(err => console.log(err));
  }

  //
  updateSave(update) {
    axios.put(`${this.getEndpoint()}listing`, update)
      .then(res => {
        this.setState({
          listingInfo: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* <Central listingInfo={this.state.listingInfo} numPhoto={this.state.numPhoto}/> */}
        <Gallery listingInfo={this.state.listingInfo}/>
        <Carousel listingInfo={this.state.listingInfo}/>
      </div>
    );
  }
}

export default PhotoModule;