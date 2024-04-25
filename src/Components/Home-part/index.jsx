import React from "react";
import "./home-part.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function HomePart() {
  return (
    <div className="img-part">
      <img className="pc"
        src="https://mcdonalds.az/images/bfab2fd9a9ecf3335f6f3898554a2d89.png"
        alt=""
      />
      <img className="mobile" src="https://mcdonalds.az/images/df58cd007f89bc6a2b5d971b99a48bc0.png" alt="" />
      <div className="breakfast">
        <p>
          Seher yemeyi
          <span>
            <FontAwesomeIcon icon={faSun} />
          </span>
        </p>
        <button>Etrafli</button>
      </div>
    </div>
  );
}

export default HomePart;
