import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Form, Col, Card, Row, Button, Container } from "react-bootstrap";
import UrlContext from "../context/UrlContext";

// const delay = 5
const DataSelect = () => {
  const [breed, setBreed] = useState(["select"]);
  const [subBreed, setSubBreed] = useState([]);
  const [allDogs, setAllDogs] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSubBreed, setSelectedSubBreed] = useState("");
  const [number, setNumber] = useState(1);
  const [imagePulled, setImagePulled] = useState([]);
  const [requiredForm, setRequiredForm] = useState(false);
  const [requiredStyle, setRequiredStyle] = useState({});

  const { url, setUrl } = useContext(UrlContext);

  const styles = {
    objectFit: "cover",
    borderRadius: 15,
    height: "250px",
    marginTop: "25px",
  };

  const numbersArray = Array.from(Array(50).keys(), (x) => x + 1);
  //add loading
  useEffect(() => {
    const fetchBreed = async () => {
      // const timer = setTimeout( () => {

      //   return () => clearTimeout(timer)
      // }, 1000)
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreed(Object.keys(data.message));
      setAllDogs(data.message);
      console.log("breed: ", breed);
    };

    fetchBreed();
  }, []);
  const breedSelector = (e) => {
    let clickValue = e.target.value;
    setSelectedBreed(clickValue);
    if (clickValue === "0") {
      setRequiredForm(true);
      console.log(clickValue);
    } else {
      setRequiredForm(false);

      console.log("else: ", clickValue);
      setSubBreed(Object.values(allDogs[clickValue]));
    }
  };
  const subBreedSelector = (e) => {
    let clickValue = e.target.value;
    setSelectedSubBreed(clickValue);
    console.log(e.target.value);
  };
  const numberSelector = (e) => {
    let clickValue = e.target.value;
    setNumber(clickValue);
  };

  const urlSubmit = async (e) => {
    e.preventDefault();

    if (
      selectedBreed[0] == "Select One..." ||
      selectedBreed[0] == "select" ||
      selectedBreed == ""
    ) {
      setRequiredForm(true);
    } else if (selectedSubBreed === "" || selectedSubBreed === "Optional") {
      let url1 = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${number}`;

      setUrl(url1);
      const { data } = await axios.get(url1);
      setImagePulled(data.message);
    } else {
      console.log("subBreed URL Select: ", selectedSubBreed);
      let url2 = `https://dog.ceo/api/breed/${selectedBreed}/${selectedSubBreed}/images/random/${number}`;

      setUrl(url2);
      const { data } = await axios.get(url2);
      setImagePulled(data.message);
    }
  };
  return (
    <div>
      <Form onSubmit={urlSubmit}>
        <Row>
          <Col xs>
            <Card.Title>Breed</Card.Title>
            <Form.Select
              style={requiredForm ? { formSelectBorderColor: "red", borderColor: "red" } : null}
              onChange={(event) => {
                breedSelector(event);
              }}
            >
              <option value="0" key="0" id="select">
                Select One...
              </option>
              {breed.length &&
                breed.map((dog) => (
                  <option key={dog} value={dog}>
                    {dog}
                  </option>
                ))}
            </Form.Select>
          </Col>

          <Col lg="2">
            <Card.Title>Sub Breed</Card.Title>
            <Form.Select
              onChange={(event) => {
                subBreedSelector(event);
              }}
            >
              <option>Optional</option>
              {subBreed.length ? (
                subBreed.map((sub) => (
                  <option value={sub} key={sub}>
                    {sub}
                  </option>
                ))
              ) : (
                <option disabled>No sub breeds available </option>
              )}
            </Form.Select>
          </Col>

          <Col>
            <Card.Title>Number of images</Card.Title>
            <Form.Select
              onChange={(event) => {
                numberSelector(event);
              }}
            >
              {numbersArray.length &&
                numbersArray.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
            </Form.Select>
          </Col>
          <Col className=" d-flex">
            <Button
              variant="secondary"
              className="mt-auto"
              type="submit"
              // onClick={(event) => {
              //   urlSubmit(event);
              // }}
            >
              View Images
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        {requiredForm ? (
          <Form.Label style={{ color: "red" }}>
            Please select a breed
          </Form.Label>
        ) : null}
      </Row>
      <Row>
        {imagePulled.map((img, index) => (
          <Col lg="3">
            <Card.Img style={styles} src={img} key={"img" + index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DataSelect;
