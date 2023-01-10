import React from "react";


export default function Step(props) {

    const PanelNum = props.PanelNum
    
    const num = props.num
    console.log(PanelNum == num)
    const style = {
        backgroundColor: PanelNum == num ? "#adbeff" : "#473dff",
        color: PanelNum == num ? "#02295a" : "white",
        border: PanelNum == num ? "none" : "solid #ffffff9a 1px"
    }
    
    return (
        <div className="aStep">
            <span style={style}  className="stepNum">{props.num}</span>
            <div className="details">
                <h4>{props.step}</h4>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}