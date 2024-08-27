import React, { Component } from 'react'
import axios from 'axios'
export default class ApiIntAxios extends Component {

    constructor(){
        super()
        this.state={
            users:[]
        }

    }
  render() {
    return (
      <div>
        <h2>API Using Axios</h2><br/>
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
  componentDidMount(){
    console.log("Inside componentDidMount ")
    this.fetchUserdetails()
  }

  fetchUserdetails=async()=>{
    console.log("Inside fetchUserdetails")
    const userdata= await axios.get("https://fakestoreapi.com/users")//axios directly converts the data into json format
    // const data1= await data.json()
    this.setState({users:userdata.data})//".data is necessary"
  }
}


