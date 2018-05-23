import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhotoGallery from './PhotoGallery';

import registerServiceWorker from './registerServiceWorker';
// Cache gallery container
const Container = document.querySelector('.gallery-container');

ReactDOM.render(<PhotoGallery />, Container);






