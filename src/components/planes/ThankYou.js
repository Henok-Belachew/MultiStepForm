import React from "react";
import Thank_You from "../assets/images/icon-thank-you.svg"

export default function ThankYou() {
    return (
        <div className="panel panel-5 ">
            <div className="inner">
                <img src={Thank_You} alt="" />
                <h2>Thank You!</h2>
                <p>  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}