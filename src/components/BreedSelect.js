import React from "react";
import { Form, Col, Card } from "react-bootstrap";

function BreedSelect(props) {
  return (
    <Col xs>
      <Card.Title>Breed</Card.Title>
      <Form.Select
        style={
          props.requiredForm
            ? { formSelectBorderColor: "red", borderColor: "red" }
            : null
        }
        onChange={props.breedSelector}
      >
        <option value="0" key="0" id="select">
          Select One...
        </option>
        {props.breed.length &&
          props.breed.map((dog) => (
            <option key={dog} value={dog}>
              {dog}
            </option>
          ))}
      </Form.Select>
    </Col>
  );
}

export default BreedSelect;
