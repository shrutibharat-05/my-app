import React, { Component } from 'react'
import "./StyleComp.css"
 class StyleClassComp extends Component {
  render() {
    //internal css:
    const styleObj={
        color:"black",
        backgroundColor:"pink",
        fontFamily:"arial",
        fontSize:"30px"
    }
    return (
      <>
        <h2 style={styleObj}>Style Class Comp</h2>
         
         {/* external css */}
        <h2 className='new'>This is external CSS</h2>
      </>
    )
  }
}
export default StyleClassComp;