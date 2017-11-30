import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import logo from './cuerpo.jpg';
import logo2 from './cuerpo2.jpg';
import logo3 from './cuerpo3.jpg';
import logo4 from './cuerpo4.jpg';
import './Layout.css';
//import 'react-responsive-carousel/lib/styles/carousel.css';

//import './Layout.css';

export class Imagenes extends Component {
    render() {
        return (
            <Carousel showArrows={true} showIndicators={false} showStatus={false} showThumbs={false} useKeyboardArrows={true}	infiniteLoop={true} dynamicHeight={true}>
                <div>
                    <img id="cuerpo1" src={logo} />
                    <p className="legend">PRUEBA </p>


                </div>
                <div>
                    <img id="cuerpo1" src={logo2} />
                    <p className="legend">Legend 2</p>

                </div>
                <div>
                    <img id="cuerpo1" src={logo3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img id="cuerpo1" src={logo4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
