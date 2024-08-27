import React, { Component } from 'react'
import ChildProps from './ChildProps'

export default class ParentProps extends Component {
constructor(props){
    super(props)
    this.state={
        message:'It carries msg from parent to child'
    }
}



  render() {
    return (
      <div>
        <h2>This is Parent Comp</h2>
        <ChildProps msgTochild={this.state.message}/>
        {/* here calling name of child comp is necessary to establish conn between child and parent */}
      </div>
    )
  }
}
