import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import './index.css';

const images = [
  {src: "https://tinyurl.com/pyrmds",
   caption:"Great Pyramid of Giza"},
   {src: "https://tinyurl.com/twrpsa",
   caption:"Leaning Tower of Pisa"},
   {src: "https://tinyurl.com/tjmhl",
   caption:"TajMahal "},
   {src: "https://tinyurl.com/grtwlchn",
   caption:"The Great Wall of China "},
   {src: "https://tinyurl.com/clssmrmtly",
   caption:"The Colosseum in Rome"},
   {src: "https://tinyurl.com/mchupcchu",
   caption:"Machu Picchu "}  
    
];


// Component for PhotoGallery
export default class PhotoGallery extends React.Component{
 constructor(props) {
    super(props);
 
    this.state = {
      element: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { element, isOpen } = this.state;
 
    return (
      <div id="container">
        <button className="box" type="button"
                    onClick={() => this.setState({ isOpen: true })} ><span>Click to open my photo gallery </span></button>

 //Using inbuilt lightbox capabilities
        {isOpen && (
          <Lightbox
            imageCaption={images[element].caption}
            mainSrc={images[element].src}
            
            nextSrc={images[(element + 1) % images.length].src}
            prevSrc={images[(element + images.length - 1) % images.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                element: (element + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                element: (element + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}



 
 

