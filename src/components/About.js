import React from 'react';
 export default function About(props) {
    return(
<>
<div className="container my-4  w-10"    style={{color:props.mode==="dark" ? 'white':'black' }}>
    <h1>Contact Us</h1>
<form className="my-4  w-10 border border-black py-3 px-3">
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}/>
    </div>
  </div>
  <div className="form-group my-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}/>
    <small id="emailHelp" className="form-text text-muted" >We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group my-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your query or suggestions here ......' style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }}></textarea>
  </div>
  <button type="button" className="btn btn-primary my-3">Submit</button>

</form>


</div>
  
  
</>


    );
 }