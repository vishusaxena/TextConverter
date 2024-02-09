
import { useState }  from "react";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import About from "./components/About";

function App() {
  const [ mode , setMode]=useState("primary");
  const toggle=()=>{
    if(mode=='dark'){
      setMode('primary')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='black';
  }
  }
  return (
    <>
    
    <Navbar mode={mode} toggle={toggle}/>
    
    
     
      <About mode={mode}/>
    </>
  );
}

export default App;
