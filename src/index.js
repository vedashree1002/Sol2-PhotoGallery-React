import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhotoGallery from './PhotoGallery';

import registerServiceWorker from './registerServiceWorker';
// Cache gallery container
const galleryContainer = document.querySelector('.gallery-container');

// Create new array with URLs for images

let images = [
  {src: "https://tinyurl.com/pyrmds",
   caption:"The Pyramids "},
   {src: "https://tinyurl.com/twrpsa",
   caption:"The leaning Tower of Pisa "},
   {src: "https://tinyurl.com/tjmhl",
   caption:"The TajMahal "},
   {src: "https://tinyurl.com/grtwlchn",
   caption:"The Great Wall of China "},
   {src: "https://tinyurl.com/clssmrmtly",
   caption:"The Collosseum "},
   {src: "https://tinyurl.com/mchupcchu",
   caption:"Machu Picchu "}  ,
    {src: "https://tinyurl.com/mchupcchu",
   caption:"Machu Picchu "}  ,
    {src: "https://tinyurl.com/mchupcchu",
   caption:"Machu Picchu "}  
];


ReactDOM.render(
 <PhotoGallery images={images} />
, galleryContainer);






