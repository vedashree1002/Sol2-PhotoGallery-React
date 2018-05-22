import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';

// Component for PhotoGallery
export default class PhotoGallery extends React.Component{
 constructor(props) {
  super(props);
  this.state = {
   url: ''
  }
 }
 
 render() {
  return(
    //container-fluid takes care of alignment
    //col-sm-6 col-md-3 col-xl-2 is for the grid layout of the images
   <div refs='gallery-container' className='container-fluid gallery-container'>
   <h1 style={{height: 150, backgroundColor:'black', textAlign:'center',color:'white',verticalAlign: 'middle',paddingTop:40}}> Photo Gallery - Wonders of the World </h1>
   <div className='row'>
    {
     this.props.images.map((url, index) => {
      return <div className='col-sm-6 col-md-3 col-xl-2'>
       <div >
        <Image className='img' src={url.src} alt={'Image number ' + (index + 1)} caption={url.caption} />
 
       </div>
      </div>
     })
    }
   </div>

  </div>
  )
 }
}
 
 

