
import { useState }  from "react";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import About from "./components/About"
import { Routes ,Route} from "react-router-dom";
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
    <Routes>
      <Route path="home" element={<Textbox mode={mode}/>}/>
      <Route path="contact" element={<About mode={mode}/>}/>

    </Routes>
        
    
   
     
    </>
  );
}

export default App;
