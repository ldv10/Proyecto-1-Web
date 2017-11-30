import React from 'react';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import logo from './Components/cuerpo.jpg';
import logo2 from './Components/cuerpo2.jpg';
import logo3 from './Components/cuerpo3.jpg';
import logo4 from './Components/cuerpo4.jpg';
import './Components/Layout.css';
//var React = require('react');
//var Slider = require('react-slick');

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'black'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'red'}}
      onClick={onClick}
    ></div>
  );
}




export class SimpleSlider extends React.Component {
  constructor(){
    super()

  }

render(){

  var settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   useCSS: true,

   //prevArrow: <SampleNextArrow />,
   //nextArrow: <SampleNextArrow />,


  };

    return (
      <div>
      <Slider {...settings}>
      <div><img id="cuerpo1" src={logo} /> </div>
      <div><img id="cuerpo1" src={logo2} /></div>
      <div><img id="cuerpo1" src={logo3} /></div>
      <div><img id="cuerpo1" src={logo4} /></div>
    </Slider>

      </div>
    );
  }
}
