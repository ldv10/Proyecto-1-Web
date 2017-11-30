import React from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { MyHeader } from './MyHeader.js';
//import { SimpleSlider }  from '../SimpleSlider.js';
import { Imagenes } from './Imagenes.js';
import p1 from './pie1.jpg';
import p2 from './pie2.jpg';
import p3 from './pie3.jpg';
import ban from './banner.PNG';
import social from './social.PNG';

export default class Layout extends React.Component{
    render() {

      return (
      <div>
      <MyHeader />

      <Imagenes />
      <br />
      <br />
      <br />
      <br />
      <p class="p" align="center">  CHOOSE YOUR COMFORT </p>


      <p class="pp" align="center" >Nicht jede Matratze ist gleich.  Wir stellen Technologie in die </p>
      <p class="pp" align="center">Dienste von Komfort und entwickeln Schlafprodukte einer neuen </p>
      <p class="pp" align="center">Generation. Individuell anpassbar, hochwertig und so bequem  </p>
      <p class="pp" align="center">wie nie.</p>

      <br />
      <br />

      <div id="pies">
      &nbsp;
      <img src={p1} alt=""  />
      &nbsp;
      <img src={p2} alt=""  />
      &nbsp;
      <img src={p3} alt="" />
      &nbsp;&nbsp;
      </div>


      <div id="ppies">
      &nbsp;
      <p> INDIVIDUELL ANPASSBAR </p>
      &nbsp;
      <p> DEUTSCHE QUALITÄT </p>
      &nbsp;
      <p> ZUHAUSE TESTEN </p>
      &nbsp;&nbsp;
      </div>

      <div id="pppies">
      &nbsp;
      <p> Jeder schläft anders. Unsere Produkte lassen sich individuell anpassen.  </p>

      &nbsp;
      <p> Deutsche Ingenieurskunst von seiner weichsten Seite. </p>
      &nbsp;
      <p> 5 Minuten Probeliegen reicht nicht.
      Wir geben dir bis zu 100 Nächte. </p>
      &nbsp;&nbsp;
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <img id="banner" src={ban} />


      <div id="veremos">
      <img src={social} alt="" align="right" />
      </div>


      <div id="final">
      <p class="" align="center">   </p>
      <br />
      <p class="pp2" align="center">  5% Gutschein </p>
      <p class="pp2" align="center"> bei Newsletter-Anmeldung </p>
      <br />

      <form>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="in" type="text" name="name" placeholder="Deine Email" /><button id="but" type="submit"> Anmelden</button>
      </form>

      </div>


      </div>
      );
    }
}
