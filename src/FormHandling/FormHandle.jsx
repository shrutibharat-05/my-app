import React, { useState } from 'react'

const FormHandle = () => {

  //below we decalred state :
const[formdata,setformData]=useState({
  firstname:'',
  lastname:'',
  email:'',
  
})

const Handlesubmit=()=>{
console.log("Inside Submit")
console.log(formdata)
}
const HandleChange=()=>{
  console.log("inside handle change")
}
  return (
    <>
     <h2>FormHandling In React </h2> 
     <form onSubmit={Handlesubmit}>
     Enter Your First Name:  <input type="text" name="" id="" onChange={HandleChange} /><br/>
     Enter Your Last Name:  <input type="text" name="" id=""onChange={HandleChange} /><br/>
     Enter Your Email:  <input type="email" name="" id="" onChange={HandleChange}/><br/>
     <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default FormHandle
