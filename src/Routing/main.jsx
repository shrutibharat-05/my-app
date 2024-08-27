import React from 'react'
import { BrowserRouter as Router , Routes, Route, NavLink } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import Services from './services'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ComComm from './ClassComp';
import PropInFunctComp from './propInFunctComp';
import StateClasscomp from './../stateComp/StateClasscomp';
//main.jsx is parent component.
const main = () => {
  let name="aai";
  let person={
    name:"patu",
    college:"IISC",
    GPA: "9.5"
  } 
  //above assigned values cannot be changed in child components like propInfunct,commmcomp,etc 
  //and this scenario is called a immutable *****
  return (
    <>
    
      <h1>Shruti's Routing Trial</h1>
      
      
      {/* code copied from google for react bootstrap: */}
      <Router>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            
            <Nav.Link href="/comm">ClassComp</Nav.Link>
            <Nav.Link href="/funct">FunctComp</Nav.Link>
            <Nav.Link href="/funct">StateClasscomp</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
       {/* <ul type="none" >
           <li>
      <NavLink to='/'><b>Home</b></NavLink>
      <NavLink to='/services'><b>Services </b></NavLink>
      <NavLink to='/contact'><b>Contact</b></NavLink>
      </li></ul> */}
        <Routes>
            <Route exact path='/' element={<Home/>}>
             </Route>
     <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/Services' element={<Services/>}></Route>
            <Route exact path='/comm' element={<ComComm myName={name} companyName="CitiBank" objName={person}/>}></Route>
            <Route exact path='/funct' element={<PropInFunctComp myName="  functionnn" companyName="CitiBank" objName={person}/>}></Route>
            <Route exact path='/state' element={<StateClasscomp/>}></Route>
           
         </Routes>
      </Router>
    </>
  )
}

export default main
