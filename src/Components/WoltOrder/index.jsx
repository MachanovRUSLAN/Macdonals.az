import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./woltorder.css";
import "../CommonCss/Common.css";


function WoltOrder() {
  return (
    <div className="WoldtOrderPart">
  
      
            <div className="img-wolt">
              <img className="mainImg"
                src="https://www.mcdonalds.az/images/392d23f9e55ac4056d2a56184b1d5213.jpg"
                alt=""
              />
              <img className="boximg" src="https://www.mcdonalds.az/images/9a6daf9975dd36c08d913590516c4223.jpg" alt="" />
            </div>
    
            <div className="WoltContent">
              <h1>
                “McDonald’s”dan yemək sifarişləri
                <br /> “Wolt” vasitəsilə çatdırılma ilə.
              </h1>
              <p>“McDonald’s”dan yeməklərin “Wolt” vasitəsilə çatdırılması.</p>
              <button>Etrafli</button>
            </div>
         
    
    </div>
  );
}

export default WoltOrder;
