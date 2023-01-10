import React from "react";
// import { useState } from "react";

export default function AddOns(props) {

 
    console.log(props.id+1)
    console.log("sum of id")
    // var checkStatus = false

    // getting the status of the add-on
    // const newStatus = props.addOns[props.id]
    let theStatus = false
   

    theStatus = props.addonsStatus[props.id]

    
    
    const style = {

      
        border:  theStatus ? "#473dff solid 1px" : "",
        backgroundColor: theStatus ? "#f8f9fe" : ""
        // backgroundColor: props.addOns[props.id] ?"#f8f9fe" : ""
    }

    
    function checker () {

       if (props.id === 0) {
       props.updateStep3(!props.addonsStatus[0],props.addonsStatus[1], props.addonsStatus[2])

        // document.getElementById("checkBox").checked = theStatus
       
       
       
    }
    else if (props.id === 1) {
        props.updateStep3(props.addonsStatus[0],!props.addonsStatus[1], props.addonsStatus[2])
    }
    else if (props.id === 2) {
        props.updateStep3(props.addonsStatus[0],props.addonsStatus[1], !props.addonsStatus[2])
    }
    }

    


    // function that returns checked

    
   
    
    return (
        <div style={style} className="adds">
                <input id="checkBox"
                    onChange={checker}
                    checked={theStatus}
                type="checkbox" />

                <div className="adds-info">
                    <h3>{props.feature}</h3>
                    <p>{props.discription}</p>
                </div>

                <h3 className="price-3">
                    +${!props.Yearly && props.userData[props.id].monPrice} 
                    {!props.Yearly && "/mo"}
                    {props.Yearly && props.userData[props.id].yrPrice}
                    {props.Yearly && "/yr"}
                </h3>
            </div>
    )
}