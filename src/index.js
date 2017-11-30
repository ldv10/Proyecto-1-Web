import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-sticky-header/styles.css';
//import StickyHeader from 'react-sticky-header';
import Layout from './Components/Layout.js';


ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
