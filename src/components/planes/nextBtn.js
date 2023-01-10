import React from "react";

export default function NextBtn (Method) {
    
    function ChangePlane () {
        Method.props.setPlaneNum (2)
    }
    return(
        <button onClick={ChangePlane} id="btn">Next Step</button>
    )
}