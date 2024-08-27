// import logo from './logo.svg';
import './App.css';
// import WelcomeComp from './components/classcomp';
// import Firstfun from './functComp/functcomp';
// import ConFun from './functComp/functcomp';
//import JsxAdd from './JSX text/JSXcomp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Routing/main';
import StateClasscomp from './stateComp/StateClasscomp';
import StateFuncomp from './stateComp/StateFuncomp';
import StyleComp from './stylingComp/StyleComp';
import StyleClassComp from './stylingComp/StyleClassComp';
import ClassCompLifecycle from './LifeCyleClass/ClassCompLifecycle';
import UseeffectAPICall from './ApiIntegration/UseeffectAPICall';
import ApiInt from './ApiIntegration/ApiInt';
import ApiIntAxios from './ApiIntegration/ApiIntAxios';
import ClassNormalComp from './PureComp/ClassNormalComp';
import PurCompTest from './PureComp/PurCompTest';
import ParentProps from './childToparentComm/ParentProps';
import ParentCallback from './childToparentComm/ParentCallback';
import FormHandle from './FormHandling/FormHandle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <h1>Hello It's Shruti Here..</h1> 
      {/* <Firstfun/> */}
      {/* <WelcomeComp/>  */}
      {/* <ConFun/> */}
     {/* <JsxAdd/> */}
     {/* <Main/> */}
     {/* <StateClasscomp/> */}
     {/* <StateFuncomp/> */}
     {/* <StyleComp/> */}
     {/* <StyleClassComp/> */}
     {/* <ClassCompLifecycle/> */}
<ApiInt/>
{/* <ApiIntAxios/> */}
{/* <UseeffectAPICall/> */}
{/* <ClassNormalComp/>
<PurCompTest/> */}
{/* <ParentProps/> */}
{/* <ParentCallback/> */}
{/* <FormHandle/> */}
        </header>
    </div>
  );
}

export default App;
