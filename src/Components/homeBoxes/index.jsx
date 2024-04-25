import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./boxes.css";

function HomeBoxes() {
  return (
    <div className="boxes">
      
          <div className="box">
            <img className="mainImg"
              src="https://www.mcdonalds.az/images/292a1d4806065e6318ef8c9d9e9264b0.jpg"
              alt=""
            />
            <img
              className="boximg"
              src="	https://www.mcdonalds.az/images/2acb63b9fd44b0d2ce2c8fdac9bea888.jpg"
              alt=""
            />
            <h1>E-məktublarımıza abunə olun</h1>
            <p>
              “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan keçin.
            </p>
            <button>Etrafli</button>
          </div>
     
          <div className="box">
            <img className="mainImg"
              src="https://www.mcdonalds.az/images/84b30fedac58f3e1433a3da5d0c945a9.png"
              alt=""
            />
            <img
              className="boximg"
              src="https://www.mcdonalds.az/images/486d4ddcf4ef6b93ccc8a9e0b8b675b4.png"
              alt=""
            />
            <h1>E-məktublarımıza abunə olun</h1>
            <p>
              “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan keçin.
            </p>
            <button>Etrafli</button>
          </div>
     
          <div className="box">
            <img className="mainImg"
              src="https://www.mcdonalds.az/images/e1365cd6b7a0589ce08bdd726c4d7ab3.jpg"
              alt=""
            />
            <img
              className="boximg"
              src="https://www.mcdonalds.az/images/7b4343780280b423cfa2f4273a402c33.jpg"
              alt=""
            />
            <h1>E-məktublarımıza abunə olun</h1>
            <p>
              “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan keçin.
            </p>
            <button>Etrafli</button>
          </div>
      
    </div>
  );
}

export default HomeBoxes;
