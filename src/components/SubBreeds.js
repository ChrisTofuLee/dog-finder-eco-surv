import React from "react";
import { Form, Col, Card } from "react-bootstrap";

function SubBreeds(props) {
  return (
    <Col lg="2">
      <Card.Title>Sub Breed</Card.Title>
      <Form.Select onChange={props.subBreedSelector}>
        <option key="-3">Optional</option>
        {props.subBreed.length ? (
          props.subBreed.map((sub) => (
            <option value={sub} key={sub}>
              {sub}
            </option>
          ))
        ) : (
          <option disabled key={-1}>
            No sub breeds available{" "}
          </option>
        )}
      </Form.Select>
    </Col>
  );
}

export default SubBreeds;
