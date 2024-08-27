import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const StateFuncomp = () => {
    //syntax for declaring state in function comp:
     //const[statename,functionname to upadte]= useState(default/initial value of state)
     //here useState is used as hook to store initial value
     const[Myname,setMyname]= useState("sara")
     const[Person,setPerson]= useState({name:"shri",age:26,add:"pune"}) 
     const [array,setArray]= useState([1,2,3,4,5,6])
     const [bool,setBool]= useState("True")
     const changeMyname=()=>{
        console.log("inside fun state");
        setMyname("kaushh")

     }   
     const changePerson=()=>{
        //setPerson({name:"hari",age:55})
        setPerson(prePerson=>({
            ...prePerson,age:"33",add:"satara"//only change some desired part of array
        }))
     }
     const changeArr=()=>{
        setArray([9,8,7])
     }
     const changeBool=()=>{
        setBool("False")
     }
    
  return (

    <>
      <h2>Inside State function</h2>
      <h3>Initial value of state is:  {Myname}</h3>
      <Button onClick={changeMyname}>Change State</Button>
      <h3>Initial value of object is: {JSON.stringify(Person)}</h3>
      <Button onClick={changePerson}>Change Object</Button>
      <h3>Initial value of array is:  {array.join(",")}</h3>
      <Button onClick={changeArr}>Change Array</Button>
      <h3>Initial value of boolean is:  {bool}</h3>
      <Button onClick={changeBool}>Change Boolean</Button>
 
    </>
  )
}

export default StateFuncomp
