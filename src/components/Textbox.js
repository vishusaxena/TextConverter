import React , {useState} from 'react'
export default function Textbox(props) {
    const [text , setText] = useState('')
    const [show , setBox] = useState(false);
     
     const handleupclick=()=>{
    let newtext=text.toUpperCase();
     setText(newtext)

    }
    const handlelowclick=()=>{
        let newtext=text.toLowerCase();
         setText(newtext)
    
        }
        const handlecountclick=()=>{
            setBox(!show);
    
        }
        
        
    const handleonchange=(event)=>{
        setText(event.target.value);
        
    }
    
    return (
        
        <>
            
            <div className=" container form-group my-4 " style={{color:props.mode==="dark" ? 'white':'black' }}>
                <h1 >Enter text in the Textarea  </h1>
                <textarea className="form-control" style={{backgroundColor:props.mode==="dark" ? 'black':'white' , color:props.mode==="dark" ? 'white':'black' }} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary my-3" onClick={handleupclick}> Convert in Uppercase</button>
                <button className="btn btn-primary my-3 mx-4"onClick={handlelowclick}> Convert in Lowercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handlecountclick}> {show?'Hide': 'Give' } Summary</button>
                
                 <Box status={show} summ={text} />
                

            </div>
        </>


    );
}
function Box(props){
    return(
        <div className='container my-3' style={{visibility:props.status?'visible':'hidden'}}>
            <h1>Text Summary</h1>
            <div className='border border-black py-3 px-3' >{props.summ.length} characters and {props.summ.split(" ").length } words   </div>
        </div>

    );

}