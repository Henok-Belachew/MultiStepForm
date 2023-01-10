import React from "react";
// import { useState } from "react";
import "./panel.css"
import Plan from "./plan";
import plansdata from "./plansdata";

export default function Panel_2 (props) {


    
    
    const Yearly = props.PlanType

    

    function changePlan() {
        props.updateType( !props.PlanType, props.planSelected
           
         )

       
        
    }

  

    const plan = plansdata.map((item)=>{
        return (
            <Plan  updatePlan={props.updatePlan}  planNum={item.num} selected={props.planSelected} icon={item.icon} plan={item.plan} monthly={item.monthly} yearly={item.yearly} planType={props.PlanType} />
        )
    })

    const monActive = {
        opacity: Yearly ? "50%" : "100%",
    }

    const yrActive = {
        opacity: Yearly ? "100%" : "50%",
    }

    const OnOff = {
        justifyContent: Yearly ? "flex-end" : "flex-start",
    }

    function ChangePanel() {

        props.UpdatePanel (props.PanelNum+1)

    }
    function goBack () {
        props.UpdatePanel (props.PanelNum-1)
    }
    return (
        <div className="panel-2 panel">

<div className="form">
        <h2>Select your plan</h2>
        <p> You have the option of monthly or yearly billing.
</p>

        <div className="plans">
            {plan}
            
        </div>
        <div className="switch">

            <span className="innerSwitch">
                <span className="mon" style={monActive}>Monthly</span>  
                <span onClick={changePlan} style={OnOff} className="bar">
                    <span className="circle"></span>
                </span>
                <span style={yrActive} className="yr">Yearly</span> 
            </span>
            
        </div>
        </div>

        <div className="low-btns">

        <span onClick={goBack}>Go Back</span>
        <button onClick={ChangePanel} id="btn">Next Step</button>
        </div>
        </div>
    )
}