// Import the base CSS, if you're using webpack just import them straight.
// Else import them into your base CSS.
import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import logo from './logo_full.svg';
import './Layout.css';
import logo1 from './dormir.jpg';
import logo2 from './banderas.png';
import logo3 from './tel.png';
import logo4 from './shop.png';



export const MyHeader = () => (
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <h1 className="Header_title"  align="">

        &nbsp; &nbsp; &nbsp;

        <button> PRODUKTE </button>

        &nbsp; &nbsp;

        <img id="dormir" src={logo1} height="23" />
        &nbsp;

        <button> SCHLAFTYP FINDEN </button>

        &nbsp; &nbsp;

        <button> ÜBER UNS </button>

        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;

        <img src={logo} height="23" />

        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;

        <button> SERVICE </button>

          &nbsp; &nbsp;

        <input type="image" id="dormir" src={logo2} height="20" />

        &nbsp; &nbsp;

        <input type="image" id="dormir" src={logo3} height="20" />

        &nbsp; &nbsp;

        <input type="image" id="dormir" src={logo4} height="20" />

        </h1>
      </div>
    }
  >
    <section>
      <p>

      </p>
    </section>
  </StickyHeader>
);
