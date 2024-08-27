import React from "react";
import { Component } from "react";
import { Button } from "react-bootstrap";
class StateClasscomp extends Component{
    constructor(){
        super()
        this.name = "patu";

        this.state={
            Myname : "old",
            arrval:[1,2,3,4,5],
            employee:{
                name:"shri",
                age:26,
            },
            flag:true,
        }
        
    }
    changeUser(){
        console.log("change user btn clicked!");
        this.name="papa";
       console.log("changed user:",this.name)
    }
    changeState(){
        console.log("change state btn clicked!")
        this.setState({Myname :"new"})
       console.log("changed state:",this.setState.Myname)
    }

changeArr(preArray){
   // this.setState({arrval:[8,7,6,5]})
    this.setState(preArray=>([...preArray,20,30,40,50]))
}
changeObj(){
    this.setState({employee:{
        name:"shruti",
        age:"18",
    }})
}
changeFlag(){
    this.setState({flag:false})
}
render(){
    
    return<>
<h2>This is state in  class in class comp</h2>
<h3>Variable name is: {this.name}</h3>
<Button onClick={this.changeUser.bind(this)}>Change User </Button>

<h3>Variable 2 name is :{this.state.Myname}</h3>
<Button onClick={this.changeState.bind(this)}>Change State </Button>

 <h3>Array is: {this.state.arrval.join(",")}</h3>
 <Button onClick={this.changeArr.bind(this)}>Change Array</Button>

 <h3>Object is: {JSON.stringify(this.state.employee)}</h3>
 <Button onClick={this.changeObj.bind(this)}>Change Object </Button>

<h3>flag value is: {this.state.flag?"True":"False"}</h3>
<Button onClick={this.changeFlag.bind(this)}>Change Flag </Button>
    </>
}
}

export default StateClasscomp;