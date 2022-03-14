import React from "react";
import { Form, Col, Card } from "react-bootstrap";

function NumberSelect(props) {
  // function creating array of 50 incremental numbers
  const numbersArray = Array.from(Array(50).keys(), (x) => x + 1);

  return (
    <Col>
      <Card.Title>Number of images</Card.Title>
      <Form.Select onChange={props.numberSelector}>
        {numbersArray.length &&
          numbersArray.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
      </Form.Select>
    </Col>
  );
}

export default NumberSelect;
