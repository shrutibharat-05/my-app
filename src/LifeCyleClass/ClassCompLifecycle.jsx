import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
//overall seq:

//i)getDerivedStateFromProps->this is static .takes(props)as parameter and prints console msg.before render and immd after constructor
//ii)shouldComponentUpdate-> we have to specify true/false to update or not and here we can add our own logic also. if true:render will execute,false: render does not execute. by defaualt :true. 
//iii)render->what exactly we are returning on browser page
//iv)getsnapshotbeforeupdate-> 
//v)componentDidMount(doesnt get executed when there is update)
 //vi)componentDidUpdate
 //vii)componentWillUnmount
export default class ClassCompLifecycle extends Component {
    //1)Initialization:
    constructor(){
        super()
        this.state = {name:"patu"};
    }
 
    //2)Mounting Phase:(when we want to execute this part before render but immediately after constructor)
    static getDerivedStateFromProps(props){
        console.log("inside getDerivedStateFromProps!")
        return null
    }

    render() {
    console.log("inside render")
    return (
      <>
        <h3>Welcome To Class CompLifeStyle</h3>
        <h2>The name is:  {this.state.name}</h2>
        <button  onClick={this.change}>Udate it</button>
      </>
    )
  }
  componentDidMount(){
    console.log("inside componentDidMount!")
  }
  change=()=>{
    this.setState({name:"shruti"})
 }
 //3)update phase:
  
  shouldComponentUpdate(){//you can write your logic inside this
   console.log(" inside shouldComponentUpdate")
   return true
  }
  getSnapshotBeforeUpdate(){
    console.log("inside getSnapshotBeforeUpdate")
    return null//to keep record of the data before updating
  }
  componentDidUpdate(){
    console.log(" inside componentDidUpdate ")

  }

//unmount phase:
componentWillUnmount(){
  console.log("inside componentWillUnmount")
}
}
