import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import { spy } from 'sinon';
import Gallery from '../client/components/gallery/Gallery.jsx';
import NavBar from '../client/components/gallery/NavBar.jsx';
import Form from '../client/components/gallery/Form.jsx';
import data from './dummydata.js';

Enzyme.configure({ adapter: new Adapter() });


describe('<NavBar />', () => {
  xit('renders NavBar', () => {
    const wrapper = shallow(<NavBar save={()=>{}} toggleGallery={()=> {}} listingInfo={data}/>);
    expect(wrapper).toMatchSnapshot();
  });


  xit('renders Form', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders NavBar', () => {
    const wrapper = shallow(<NavBar save={()=>{}} toggleGallery={()=> {}} listingInfo={data}/>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('renders Form', () => {
    const wrapper = shallow(<Form/>);
    expect(wrapper).not.toBeEmptyRender();
  });

  // it('has svg files', () => {
  //   const wrapper = shallow(<NavBar save={()=>{}} toggleGallery={()=> {}} listingInfo={data}/>);
  // });



  it('should not Gallery render when show is false', ()=> {
    const wrapper = shallow(<Gallery listingInfo={data} show={false} numPhoto={data.photos.length} toggleGallery={()=>{}} toggleCarousel={()=>{}} addPlace={()=>{}} save={()=>{}}/>);
    expect(wrapper).toBeEmptyRender();
  });

  it('should render Gallery when show is true', ()=> {
    const wrapper = shallow(<Gallery listingInfo={data} show={true} numPhoto={data.photos.length} toggleGallery={()=>{}} toggleCarousel={()=>{}} addPlace={()=>{}} save={()=>{}}/>);
    expect(wrapper).not.toBeEmptyRender();
  });

  it('trigger toggleGallery when clicked', ()=> {
    const wrapper = shallow(<Gallery listingInfo={data} show={true} numPhoto={data.photos.length} toggleGallery={spy()} toggleCarousel={spy()} addPlace={spy()} save={spy()}/>);

    wrapper
      .find('.save')
      .simulate('click');

    expect(spy.calledOnce).toBe(true);

  });

});


