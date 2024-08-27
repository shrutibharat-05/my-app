import React, { Component } from 'react'
import ChildCallback from './ChildCallback'

export default class ParentCallback extends Component {

    constructor(props){
        super(props)
        this.state={
            messagebychild:'Initial temporaray Callback msg from parents'
        }
    }

   msgfromchildThroghcallback=(message)=>{
    this.setState({messagebychild:message})
   }

  render() {
    return (
      <div>
        <h2>This is ParentCallback </h2>
        <h3>Message from Child:{this.state.messagebychild}</h3>
        <ChildCallback senddatatoParent={this.msgfromchildThroghcallback}/>
          </div>
        
     
    )
  }
}
