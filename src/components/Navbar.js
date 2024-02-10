import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar(props) {
    return (
        < >
            <nav className={`navbar  bg-${props.mode} text-white`}>
                <span className="navbar-brand mb-0 h1 ">Textontrack</span>
                
      <div className='navbar navbar-expand-lg ' >
        <Link class="nav-link text-white" aria-current="page" to="home">Home</Link>
        <Link class="nav-link text-white" to="contact">Contact Us</Link>
      </div>
  
                

      
        
      
      
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" onClick={props.toggle} id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">Enable {props.mode === "dark" ? 'Light' : 'Dark'} mode</label>
                </div>
    
    
      
    
  
            </nav>
        </>


    );
}