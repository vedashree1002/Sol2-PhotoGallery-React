import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Component for gallery image
export default class Image extends React.Component {
 render() {
  return(
  	   



   <figure>
   <img className={this.props.className} src={this.props.src} alt={this.props.alt}   style={{width: 800, height: 300}}/>
    <figcaption style={{textAlign:'center'}}>{this.props.caption}</figcaption>
</figure>


   )
 }
}