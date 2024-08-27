import React, { Component } from 'react'

export default class ApiInt extends Component {

    constructor(){
        super()
        this.state={
            users:[]
        }

    }
  render() {//this phase includes whatever to be displayed on ui
    return (
      <div>
        <h2>API Integration</h2><br/>
        <h2>User List</h2>
<ul>
    {
        this.state.users.map((user)=>(
            <li>{user.useraname}-{user.password}</li>
        ))
    }
</ul>

      </div>
    )
   
  }
  componentDidMount(){//this phase tocall api
    console.log("Inside componentDidMount ")
    this.fetchUserdetails()
  }

  fetchUserdetails=async()=>{//this phase to actually get info through api
    console.log("Inside fetchUserdetails")//the async function means- other processes should not wait for this to execute
    const data= await fetch("https://fakestoreapi.com/users")//fetch is js inbuilt function
    const data1= await data.json()//convert the info in json format
    this.setState({users:data1})
  }
}
