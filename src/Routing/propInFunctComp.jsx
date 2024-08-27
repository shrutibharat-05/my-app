import React from 'react'

const propInFunctComp = (props) => {  //here, parameter can be any value means we can directly use myName,companyName here in curly brackets
  const{myName,companyName,objName}=props//this is called destructuring
 
  return (
    <>
      <h3>This is a function component block</h3><br/>
<h5>the funct name is:{props.myName}</h5><br/>
<h3>Company Name is : {companyName}</h3><br/>
        <h3>Object is : {JSON.stringify(objName)}</h3><br/>
    </>
  )
}

export default propInFunctComp;
