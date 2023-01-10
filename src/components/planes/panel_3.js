import React from "react";
import "./panel.css"
import AddOns from "./add-on";
import addonData from "./addonData";

export default function panel_3(props) {


    // fetching the passed data through props
    let theStatus = false
    if (props.id == 1) {
        theStatus = props.addons1
    }
    else if (props.id == 2) {
        theStatus = props.addons2
    }
    else if (props.id == 3) {
        theStatus = props.addons3
    }
    const addons = addonData.map(
        (item)=> {
            return (
                <AddOns addons = {theStatus}
                id = {item.id}
                selected={item.selected}
                feature={item.feature} 
                discription={item.discription}
                userData={addonData}
                
               
                // passing necessesary states and their methods

                addons1 = {props.addons1}
                addons2 = {props.addons2}
                addons3 = {props.addons3}
                // passing the state of each add-ons
                onlineService = {props.onlineService}
                largeStorage= {props.largeStorage}
                customProfile = {props.customProfile}

                // passing state methods of each add-ons state

                setOnline ={props.setOnline}
                setLarge = {props.setLarge}
                setCustom = {props.setCustom}

                // addOns = {props.addOns}
                Yearly = {props.Yearly}
                addonsStatus = {props.addonsStatus}
                updateStep3 = {props.updateStep3}
                />
            )
        }
    )

    console.log(props.Data)

    function ChangePanel() {
        // props.updateStep3(true, true, true)

        props.UpdatePanel (props.PanelNum+1)

    }
    function goBack () {
        props.UpdatePanel (props.PanelNum-1)
    }
    return (
        <div className="panel-3 panel">
<div className="form">
        <h2>Pick add-ons</h2>
        <p> Add-ons help enhance your gaming experience.
</p>

        <div className="add-ons">

            
           {addons}

        </div>
        </div>

        <div className="low-btns">

        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        </div>
    )
}