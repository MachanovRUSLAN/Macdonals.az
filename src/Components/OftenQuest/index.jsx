import React from "react";
import {Col,  Row} from "react-bootstrap"
import "./questions.css"

function Questions() {
  return (
   <div className="questions">
   
    <Row>
          <Col lg="6" md="6" sm="12">
    <div className="productQuestions">
      <img src="https://www.mcdonalds.az/images/a36abce3ef3696a739d3ea5f6294a30e.png" alt="" />
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

export default Questions;
