import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Col, Row, Button } from "react-bootstrap";
import SubBreeds from "../components/SubBreeds";
import NumberSelect from "../components/NumberSelect";
import ImageResults from "../components/ImageResults";
import BreedSelect from "../components/BreedSelect";
import Conditions from "../components/Conditions";

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
  const [imagesCount, setImagesCount] = useState(false);
  const [loading, setLoading] = useState(false);

  //fetching of all dog breeds and dog breeds available
  //this ensures list available is upto date
  useEffect(() => {
    const fetchBreed = async () => {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      //setting into state to populate list drop down
      setBreed(Object.keys(data.message));
      //storing full list to avoid another api call for sub breed
      setAllDogs(data.message);
    };

    fetchBreed();
  }, []);

  // set state of selected breed on change of breed drop down
  //populate sub breed list if available
  const breedSelector = (e) => {
    let clickValue = e.target.value;
    setSelectedBreed(clickValue);
    //validation to make sure dog breed is selected
    if (clickValue === "0") {
      setRequiredForm(true);
      console.log(clickValue);
    } else {
      setRequiredForm(false);
      setSubBreed(Object.values(allDogs[clickValue]));
    }
  };
  // set state of selected sub breed on change of sub breed drop down list
  const subBreedSelector = (e) => {
    let clickValue = e.target.value;
    setSelectedSubBreed(clickValue);
  };
  // set state of selected sub breed on change of sub breed drop down list
  const numberSelector = (e) => {
    let clickValue = e.target.value;
    setNumber(clickValue);
  };

  //api call for dog images based on selections made on form submit
  const urlSubmit = async (e) => {
    e.preventDefault();
    // validation to make sure breed is selected
    if (
      selectedBreed[0] == "Select One..." ||
      selectedBreed[0] == "select" ||
      selectedBreed == ""
    ) {
      setRequiredForm(true);
    } else if (selectedSubBreed === "" || selectedSubBreed === "Optional") {
      //api call if only breed is selected
      const { data } = await axios.get(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/${number}`
      );
      setImagePulled(data.message);
      if (data.message.length == number) {
        setImagesCount(false);
      } else {
        setImagesCount(true);
      }
    } else {
      //api call if sub breed is selected as well
      const { data } = await axios.get(
        `https://dog.ceo/api/breed/${selectedBreed}/${selectedSubBreed}/images/random/${number}`
      );
      setImagePulled(data.message);
      if (data.message.length == number) {
        setImagesCount(false);
      } else {
        setImagesCount(true);
      }
    }
  };
  return (
    <div>
      <Form onSubmit={urlSubmit}>
        <Row>
          {/* list drop down that shows full list of breeds available with conditions that highlight red if non selected on submit */}
          <BreedSelect
            requiredForm={requiredForm}
            breedSelector={breedSelector}
            breed={breed}
          />

          {/* conditional list drop down that hows sub breed if available */}
          <SubBreeds subBreed={subBreed} subBreedSelector={subBreedSelector} />

          {/* list drop down with numbers from 1 - 50 */}
          <NumberSelect numberSelector={numberSelector} />

          <Col className=" d-flex">
            <Button variant="secondary" className="mt-auto" type="submit">
              View Images
            </Button>
          </Col>
        </Row>
      </Form>

      {/* conditional text to shows user that breed must be selected */}
      <Conditions
        condition={requiredForm}
        color="red"
        text="Please select a breed"
      />

      {/* conditional text to shows user that number of images found is limited */}
      <Conditions
        condition={imagesCount}
        color="green"
        text={`Only able to find ${imagePulled.length}`}
      />

      {/* row for images found */}
      <ImageResults imagePulled={imagePulled} />
    </div>
  );
};

export default DataSelect;
