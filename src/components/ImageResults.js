import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import './ImageResults.css'

function ImageResults(props) {
  // const styles = {
  //   objectFit: "cover",
  //   borderRadius: 15,
  //   height: "250px",
  //   marginTop: "25px",
  // };
  return (
    <Row>
      {props.imagePulled.map((img, index) => (
        <Col lg="3">
          <Card.Img id="images-card" src={img} key={`a${index}`} />
        </Col>
      ))}
    </Row>
  );
}

export default ImageResults;
