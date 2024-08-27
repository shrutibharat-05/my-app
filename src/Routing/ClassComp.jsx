import React, { Component } from 'react'

class ComComm extends Component {
  constructor(props){
    super(props); 
    console.log(props);
  }
  render() {
     // destrucure:
     const {myName,companyName,objName} = this.props  //this declared elements cant be changed in child components
    
   
     return (

      <>
     
        <h1>Component Communication </h1>
        <h3>Name is : {myName}</h3>
        
        <h3>Company Name is : {companyName}</h3>
        <h3>Object is : {JSON.stringify(objName)}</h3>
        {/* above conversion to stringify the json format into strings */}
        
      </>
    )
  }
}
export default ComComm;