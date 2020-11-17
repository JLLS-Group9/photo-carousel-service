import React from 'react';
import Central from './Central.jsx';
import Gallery from './gallery/Gallery.jsx';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class PhotoModule extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingInfo: {},
      showGallery: false,
      showCarousel: false,
      numPhoto: 0,
      place: 1
    };
    this.updateData = this.updateData.bind(this);
    this.getEndpoint = this.getEndpoint.bind(this);
    this.toggleGallery = this.toggleGallery.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
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

  updateSave(update) {
    axios.put(`${this.getEndpoint()}listing`, update)
      .then(res => {
        this.setState({
          listingInfo: res.data,
        });
      })
      .catch(err => console.log(err));
  }

  toggleGallery() {
    this.setState({
      showGallery: !this.state.showGallery
    });
    console.log(this.state.showGallery);
  }

  toggleCarousel(id) {
    event.preventDefault();
    this.setState({
      place: id
    });
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <Central listingInfo={this.state.listingInfo} numPhoto={this.state.numPhoto} toggleGallery={this.toggleGallery}/>
        <Gallery
          listingInfo={this.state.listingInfo}
          show={this.state.showGallery}
          toggleGallery={this.toggleGallery}
          toggleCarousel={this.toggleCarousel}
          numPhoto={this.state.numPhoto}
        />
        <Carousel
          listingInfo={this.state.listingInfo}
          show={this.state.showCarousel}
          toggleCarousel={this.toggleCarousel}
          numPhoto={this.state.numPhoto}/>
      </div>
    );
  }
}

export default PhotoModule;