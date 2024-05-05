import React from "react";
import "./product.css"
import {Col,  Row} from "react-bootstrap"

function ProductQuality() {
  return (
   <div className="product">
   
    <Row>
          <Col lg="6" md="6" sm="12">
    <div className="productExcellence">
      <img src="https://www.mcdonalds.az/images/f2064015a43b46299d9e5f19aba1a5d7.png" alt="" />
      <h1>Biz keyfiyyətə sadiq qalırıq</h1>
      <p>
        Biz yeməklərimizin hazırlanma üsullarını və onlara daxil olan ərzaqların
        <br />
        keyfiyyətini daima təkmilləşdiririk.
      </p>
      <button>Daha etrafli</button>
    </div>
     </Col>
    </Row>
   </div>
  );
}

export default ProductQuality;
