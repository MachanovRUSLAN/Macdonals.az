import React from "react";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "./mobileApp.css";
import "../CommonCss/Common.css";

function MobileAppPart() {
  return (
    <div className="MobileAppPart">
    
          <div className="MobileContent">
            <h1>
              “McDonald’s”ın mobil <br />
              tətbiqini yükləyin.
            </h1>
            <p>"McDonald's" tətbiqində xüsusi təkliflər.</p>
            <button>Etrafli</button>
          </div>
      
          <div className="img-mobile">
            <img className="mainImg"
              src="https://www.mcdonalds.az/images/36d465453ba9d421a026d608495fb2e3.png"
              alt=""
            />
            <img className="boximg" src="https://www.mcdonalds.az/images/708dec2178ce34a8dc48e1ceef9dae9c.png" alt="" />
          </div>
       
    </div>
  );
}

export default MobileAppPart;
