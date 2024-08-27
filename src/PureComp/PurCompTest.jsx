import React, { Component, PureComponent } from 'react'
import { Button } from 'react-bootstrap'

export default class PurCompTest extends PureComponent{//usually here 'extends Component' he hota h but in pure comp, we write PureComponent
//pure comp identid=fies kya actual m apke site m kuch changes hue h ya nhi.if there are any changes then only it will render the output 
//otherwise it will not unnecessarily render the page.
    constructor(props){
        super(props)
          this.state={
            count:0
          }
          }
    
          incrementCount=()=>{
            console.log("inside increment count");
            this.setState=({count: this.state.count+1})
          }
      






  render() {
    console.log("Inside render")
    return (
      <>
        <h2>Pure  Class Comp</h2>
        <h3>The count is:{this.state.count}- <Button onClick={this.incrementCount}>+</Button></h3>


      </>
    )
  }
}
