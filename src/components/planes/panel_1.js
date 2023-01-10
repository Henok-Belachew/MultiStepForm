import React from "react";
// import { useState } from "react";
import "./panel.css"


export default function Panel_1(props) {

    // Changing panels
    function ChangePanel() {
    
        props.UpdatePanel (props.PanelNum+1)
        updateStep_1()
    }

    // Setting the values of input fields from state

    // Getting the value of the user data fron input fields
    const step_1 = []
    function setName (event) {
        
            // if (props.name !== "e.g. Henok Belachew") {
            //     setuserClicked(
            //         [true,userClicked[1],userClicked[2]]
            //     )
            //     setfieldRequired(
            //         [true,fieldRequired[1],fieldRequired[2]]
            //     )             

            // }
            step_1[0] = event.target.value
       
        
    }

    function setEmail (event) {
      

            step_1[1] = event.target.value 

        
       
        
    }

    function setPhone (event) {
  
            step_1[2] = event.target.value
        
        
    }

    // Passing the user data to the states

    function updateStep_1(){

        if (  step_1[0] !== undefined  ) {
        props.updateStep_1(step_1)
        }
    }


    // const [fieldRequired, setfieldRequired] = useState([false, false, false])
    // // state used to check if the user clicked on the field and changed the value
    // const [userClicked, setuserClicked] = useState([false, true, false])

    // const styles = [
    //     {
            
    //     }
    // ]
        

    
    
    

    // const style = { 
    //     color: "red",
    //     // fontSize: "12px",
    //     display: "inline",
    // }

    // const style1 = {
    //     display: userClicked[0] ? fieldRequired[0] && "inline" : ""
    // }
    // const style2 = {
    //     display: userClicked[1] ?  fieldRequired[1] && "inline" : ""
    // }
    // const style3 = {
    //     display: userClicked[2] ?  fieldRequired[2] &&"inline" : ""
    // }
   
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