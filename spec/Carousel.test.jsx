import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import { spy } from 'sinon';
import Carousel from '../client/components/carousel/Carousel.jsx';
import data from './dummydata.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Carousel />', () => {

  it('should not render carousel render when show is false', ()=> {
    const wrapper = shallow(<Carousel listingInfo={data} show={false} numPhoto={data.photos.length} toggleGallery={()=>{}} toggleCarousel={()=>{}} addPlace={()=>{}} closeCarousel={()=>{}} save={()=>{}}/>);
    expect(wrapper).toBeEmptyRender();
  });

  it('should render carousel when show is true', ()=> {
    const wrapper = shallow(<Carousel listingInfo={data} show={true} numPhoto={data.photos.length} toggleGallery={()=>{}} toggleCarousel={()=>{}} addPlace={()=>{}} closeCarousel={()=>{}} save={()=>{}}/>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('trigger closeCarousel when clicked out of box', ()=> {
    const wrapper = mount(<Carousel listingInfo={data} show={true} numPhoto={data.photos.length} toggleGallery={spy()} toggleCarousel={spy()} addPlace={()=> {}} closeCarousel={spy()} save={spy()}/>);

    wrapper
      .find('.closeLeft')
      .simulate('click');

    expect(spy.calledOnce).toBe(true);

  });

});
