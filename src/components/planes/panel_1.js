import React from "react";
// import { useState } from "react";
import "./panel.css"


export default function Panel_1(props) {

    // Changing panels
    function ChangePanel() {
    
        props.UpdatePanel (props.PanelNum+1)
        updateStep_1()
    }

  

    // Getting the value of the user data fron input fields
    const step_1 = []

    function setName (event) {step_1[0] = event.target.value}

    function setEmail (event) {step_1[1] = event.target.value}

    function setPhone (event) {step_1[2] = event.target.value}
    
    // Passing the user data to the parent states

    function updateStep_1(){

        if (  step_1[0] !== undefined  ) {
        props.updateStep_1(step_1)
        }
    }
   
    return (
        <div className="panel-1 panel">
        
        

        <div className="form">
        <h2>Personal Info</h2>
        <p> Please provide your name, email address, and phone number.</p>

        <div className="fields">
            <label> 
            <span className="upperField">
                <span> Name</span>
                <span className="required">This field is required</span>
            </span> 
                <input onChange={setName}  placeholder={props.name} type="text" />
            </label>
            <label> 
            <span className="upperField">
                <span>Email</span>
                <span className="required">This field is required</span>
            </span> 
                <input onChange={setEmail} placeholder={props.email} type="email" />
            </label>
            <label> 
            <span className="upperField">
                <span>Phone Number</span>
                <span className="required">This field is required</span>
            </span> 
                <input onChange={setPhone} placeholder={props.Phone_Number}type="number" />
            </label>
        </div>
        </div>
        
    

        <div className="low-btns">

        <span></span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        
    
           
        </div>
    )
}