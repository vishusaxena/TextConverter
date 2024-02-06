import React from 'react'
export default function Textbox() {
    return (
        <>
            <div className=" container form-group my-4">
                <h1>Enter text in this Textarea</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
                <button className="btn btn-primary my-3"> Convert in Uppercase</button>
                <button className="btn btn-primary my-3 mx-4"> Convert in Lowercase</button>
                <button className="btn btn-primary my-3 mx-3"> Count Words</button>
                <button className="btn btn-primary my-3 mx-3"> Clear Textarea</button>

                

            </div>
        </>


    );
}