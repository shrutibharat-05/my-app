import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseeffectAPICall = () => {

const[postData, setPostData]=useState([]);

useEffect(
    ()=>{

const getPostdata = async() =>{
    const postData= await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPostData(postData.data);
}
getPostdata();
    }
)



  return (
    <>
      <h2>UseEffect Hook Call API</h2>

      <div>
        <h2>Postlist using API(Funt-useeffect)</h2><br/>
       
<ul>
    {
        postData.map((data)=>(
            <li>{data.userId},{data.id},{data.title},{data.body}</li>
        ))
    }
</ul>

      </div>




    </>
  )
}

export default UseeffectAPICall
