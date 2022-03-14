import React from "react";
import { Form, Row } from "react-bootstrap";

function Conditions(props) {
  return (
    <Row>
      {props.condition ? (
        <Form.Label style={{ color: `${props.color}`, paddingTop: "10px" }}>
          {props.text}
        </Form.Label>
      ) : null}
    </Row>
  );
}

export default Conditions;
