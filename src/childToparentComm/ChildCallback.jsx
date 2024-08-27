import React, { Component } from 'react'

export default class ChildCallback extends Component {

  constructor(props){
    super(props)
    this.state={
      message:'New message from cHILD CALLBACK'
    }
  }

  sendData=()=>{
    this.props.senddatatoParent(this.state.message)
  }//This is callback function used to set new value and send to parent comp

  render() {
    return (
      <div>
        <h2>This is Child Callback</h2>
       

       <button onClick={this.sendData}>Send dataa to parent comp</button>
      </div>
    )
  }
}
