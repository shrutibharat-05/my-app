import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ClassNormalComp extends Component {

  
  constructor(props){
    super(props)
      this.state={
        count:0
      }
      }

      incrementCount=()=>{
        console.log("inside increement count");
        this.setState=({count: this.state.count})
        //this.setState+=1
      }
  
      render()
  {

    
    console.log("Inside render")
    return (
      <>
        <h2>Normal Class Comp</h2>
        <h3>The count is:{this.state.count}- <Button onClick={this.incrementCount}>+</Button></h3>


      </>
    )
  }
}
