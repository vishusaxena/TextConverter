import React from 'react'
export default function Navbar(props) {
    return (
        < >
            <nav className={`navbar  bg-${props.mode} text-white`}>
                <span className="navbar-brand mb-0 h1 ">Textontrack</span>
                <a className="nav-link  "  href="#">Link</a>

      
        
      
      
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" onClick={props.toggle} id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">Enable {props.mode === "dark" ? 'Light' : 'Dark'} mode</label>
                </div>
    
    
      
    
  
            </nav>
        </>


    );
}