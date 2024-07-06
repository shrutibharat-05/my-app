import { Fragment } from "react";

// const JsxAdd=()=>{
//     let a=20,b=30;
//    return( <div>
//     <h4>The addition is:{a+b}</h4>
//     <h3>{a<50?'A is less than 50':'A is greater than 50'}</h3>
//     </div>)
// }
// const JsxAdd=()=>{
//     let a=20,b=30;
//    return( <Fragment>
//     <h4>The addition is:{a+b}</h4>
//     <h3>{a<50?'A is less than 50':'A is greater than 50'}</h3>
//     </Fragment>)
// }
const JsxAdd=()=>{
    let a=20,b=30;
   return( <>
    <h4>The addition is:{a+b}</h4>
    <h3>{a<50?'A is less than 50':'A is greater than 50'}</h3>
    </>)
}
export default JsxAdd;