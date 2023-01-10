import React from "react";
import "./styles.css"
import "./styles.css"
import bgdesktop from "../assets/images/bg-sidebar-desktop.svg";
import Step from "./step";
import stepdata from "./stepdata";

export default function AllSteps(props) {

    const PanelNum = props.PanelNum
    const steps = stepdata.map((astep)=>{
        return (
            <Step PanelNum={PanelNum} num={astep.num} step={astep.step} title={astep.title} />
        )
    })

    return (
        <div className="side">

            <div className="allsteps">
                {steps}
            </div>
            
            <img id="side-img" src={bgdesktop} alt="" />
        </div>
    )
}