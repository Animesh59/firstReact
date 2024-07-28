import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import axiosClient from "./axiosClient";

export default function TextField() {
    function handleUserInput(event) {
        setText(event.target.value)
    }
    function handleUpper() {
        setText(text.toUpperCase())
    }
    function handleLower() {
        setText(text.toLowerCase())
    }
    const [text, setText] = useState()

    // axiosClient.get('/auth')
    //     .then(res => {
    //         console.log(res.data.status);
    //         if (res.data.status == 'success') {
    //             console.log('inside');
    //             return (<><h1>can not</h1></>)
    //         }
    //         return (
    //             <>
    //                 <div className="mt-5">
    //                     <textarea value={text} placeholder="Enter your text here" onChange={handleUserInput} className="form-control mt-10" id="exampleFormControlTextarea1" rows="08"></textarea>
    //                 </div>
    //                 <button type="button" onClick={handleUpper} className="btn btn-primary mt-3 mb-3">upper</button>
    //                 <button type="button" onClick={handleLower} className="btn btn-primary mt-3 mb-3 ms-3">lower</button>
    //             </>
    //         )
    //     })

    // setTimeout(() => {
    //     console.log('Hello I am React');
    return (
        <>
            <div className="mt-5 w-100">
                <textarea value={text} placeholder="Enter your text here" onChange={handleUserInput} className="form-control mt-10 " id="exampleFormControlTextarea1" rows="08"></textarea>
            </div>
            <span>
                <button type="button" onClick={handleUpper} className="btn btn-primary mt-3 mb-3">upper</button>
                <button type="button" onClick={handleLower} className="btn btn-primary mt-3 mb-3 ms-3">lower</button>
            </span>
        </>
    )
    // }, 5000);
}

