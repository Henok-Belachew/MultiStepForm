import React from "react";
import "./panel.css"
// importing all plans info
import Plans from "./plansdata";

// getting the details of the add ons
import addonData from "./addonData";



export default function panel_4(props) {

    const add0 = props.addOnStatus[0] ? props.Yearly ? addonData[0].yrPrice : addonData[0].monPrice : 0
    const add1 = props.addOnStatus[1] ? props.Yearly ? addonData[1].yrPrice : addonData[1].monPrice : 0

    const add2 = props.addOnStatus[2] ? props.Yearly ? addonData[2].yrPrice : addonData[2].monPrice : 0

    const planPrice = props.Yearly ? Plans[props.selectedPlan].yearly : Plans[props.selectedPlan].monthly

    console.log(add1)

    function ChangePanel() {

        props.UpdatePanel (props.PanelNum+1)

    }
    function goBack () {
        props.UpdatePanel (props.PanelNum-1)
    }

    function updatetopanel2() {
        props.UpdatePanel(2)
    }
    return (
        <div className="panel-4 panel">

        <div className="form">
        <h2>Finishing up</h2>
        <p> Double-check everything looks OK before confirming.
        </p>
        <div className="summary">
            <div className="summaryinner">
                <div className="upper">
                    <span> 
                        <h4>{Plans[props.selectedPlan].plan}
                        {props.Yearly && "(Yearly)"}
                        {!props.Yearly && "(Monthly)"}
                        </h4>
                        <a onClick={updatetopanel2} href="#">Change</a>
                    </span>
                        <h5>
                       $

                        {props.Yearly ? Plans[props.selectedPlan].yearly : Plans[props.selectedPlan].monthly}

                        {props.Yearly ? "/yr" : "/mon"}
                        

                            
                        </h5>
                </div>
                <div className="lower">
                 <hr />
                   
                    {props.addOnStatus[0] &&
                    <span className="row">
                        <span>Online service </span>
                        <span>+${props.Yearly ? addonData[0].yrPrice + "/yr" : addonData[0].monPrice + "/mon"}</span>
                    </span> }
                    {props.addOnStatus[1] &&
                    <span className="row">
                        <span>Larger Storage</span>
                        <span>+${props.Yearly ? addonData[1].yrPrice + "/yr" : addonData[1].monPrice + "/mon"}</span>
                    </span> }
                    {props.addOnStatus[2] &&
                    <span className="row">
                        <span>Custimizable Profile</span>
                        <span>+${props.Yearly ? addonData[2].yrPrice + "/yr" : addonData[2].monPrice + "/mon"}</span>
                    </span> }
                </div>
            </div>
            <span className="total"> <h5 className="gray">Total({props.Yearly ? "Yearly" : "Monthly"})</h5> <h5>${planPrice + add0 + add1 + add2 }
            {props.Yearly ? "/yr" : "/mon" }</h5></span>
           
        </div>
        </div>

        <div className="plans">
            
        </div>
        <div className="low-btns">

<span onClick={goBack}>Go Back</span>
<button onClick={ChangePanel} id="btn">Confirm</button>
</div>
        </div>
    )
}