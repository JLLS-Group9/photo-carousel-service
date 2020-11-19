import React from 'react';
import Central from './central/Central.jsx';
import Gallery from './gallery/Gallery.jsx';
import Carousel from './carousel/Carousel.jsx';
import axios from 'axios';

class PhotoModule extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listingInfo: {},
      showGallery: false,
      showCarousel: false,
      showShare: false,
      numPhoto: 0,
      place: 0
    };
    this.updateData = this.updateData.bind(this);
    this.getEndpoint = this.getEndpoint.bind(this);
    this.toggleGallery = this.toggleGallery.bind(this);
    this.toggleCarousel = this.toggleCarousel.bind(this);
    this.toggleShare = this.toggleShare.bind(this);
    this.placeCarousel = this.placeCarousel.bind(this);
    this.closeCarousel = this.closeCarousel.bind(this);
    this.updateSave = this.updateSave.bind(this);
    this.changeplace = this.changeplace.bind(this);
  }

  componentDidMount() {
    this.updateData();
    window.addEventListener('keydown', () =>{
      console.log('A key was pressed', event.keyCode);
      console.log();
      if (event.keyCode === 37) {
        this.changeplace('left');
      } else if (event.keyCode === 39) {
        this.changeplace('right');
      } else if (event.keyCode === 27) {
        if (this.state.showCarousel === true) {
          this.closeCarousel();
          return;
        } else if ( this.state.showGallery === true) {
          this.toggleGallery();
          return;
        }
        return;
      }
    });
  }


  changeplace(direction) {
    let place = this.state.place;
    if (direction === 'right') {
      place === this.state.numPhoto ? place = 1 : place++;
    } else if (direction === 'left') {
      place === 1 ? place = this.state.numPhoto : place--;
    }
    this.placeCarousel(place);
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

  updateSave() {

    let update = {saved: !this.state.listingInfo.saved};
    axios.put(`${this.getEndpoint()}listing`, update)
      .then(res => {
        this.setState({
          listingInfo: res.data,
        });
        console.log(res.data.saved);
      })
      .catch(err => console.log(err));
  }

  toggleGallery() {
    this.setState({
      showGallery: !this.state.showGallery
    });
  }

  toggleShare() {
    this.setState({
      showShare: !this.state.showShare
    });
  }



  toggleCarousel(id) {
    let numberId = Number(id);
    this.setState({
      place: numberId,
      showCarousel: !this.state.showCarousel,
    });
    console.log(this.state);
  }

  placeCarousel(id) {
    let numberId = Number(id);
    this.setState({
      place: numberId
    });
  }

  closeCarousel() {
    this.setState({
      showCarousel: false,
    });
  }


  render() {
    return (
      <div>
        <Central
          listingInfo={this.state.listingInfo}
          numPhoto={this.state.numPhoto}
          toggleGallery={this.toggleGallery}
          save={this.updateSave}/>

        <Gallery
          listingInfo={this.state.listingInfo}
          show={this.state.showGallery}
          numPhoto={this.state.numPhoto}
          toggleGallery={this.toggleGallery}
          toggleCarousel={this.toggleCarousel}
          addPlace={this.placeCarousel}
          save={this.updateSave}
        />
        <Carousel
          listingInfo={this.state.listingInfo}
          show={this.state.showCarousel}
          toggleCarousel={this.toggleCarousel}
          closeCarousel ={this.closeCarousel}
          numPhoto={this.state.numPhoto}
          place={this.state.place}
          addPlace={this.placeCarousel}
          save={this.updateSave}
        />
        {/* <Share /> */}
      </div>
    );
  }
}

export default PhotoModule;