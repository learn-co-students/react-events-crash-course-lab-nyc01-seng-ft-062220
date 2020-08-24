import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    console.log(event)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
  keyDownHandler = (e) => {
    if(e.key === "a"){
      resize ('+')
    } else if(e.key === "s") {
      resize ('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={() => {toggleCycling()}}
        onKeyDown={this.keyDownHandler}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
