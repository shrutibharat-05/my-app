import React, { Component } from 'react'

export default class ChildProps extends Component {
  render() {
    return (
      <div>
        <h2>(This is Child Comp)</h2>
        <h3>The message by parent is  :  {this.props.msgTochild}</h3>
      </div>
    )
  }
}
