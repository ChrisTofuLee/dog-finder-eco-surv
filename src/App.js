import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Card,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const styles = {
    objectFit: "cover",
    borderRadius: 15,
    height: "250px",
    marginTop: "25px",
  };
  return (
    <div className="App">
      <Row>
        <Col xs>
          <Card.Title>Breed</Card.Title>
          <Form.Select>
            <option>Select</option>
            <option>option 2</option>
          </Form.Select>
        </Col>
        <Col lg="2">
          <Card.Title>Sub Breed</Card.Title>
          <Form.Select>
            <option>Select 2</option>
            <option>option 2</option>
          </Form.Select>
        </Col>
        <Col xs lg="2">
          <Card.Title>Number of images</Card.Title>
          <Form.Select>
            <option>Select 3</option>
            <option>2</option>
          </Form.Select>
        </Col>
        <Col className="my-auto">
          <Button variant="secondary">View Images</Button>
        </Col>
      </Row>
      <Row>
        <Col lg="3">
          <Card.Img
            style={styles}
            src="https://images.dog.ceo/breeds/terrier-dandie/n02096437_4300.jpg"
          />
        </Col>
        <Col lg="3">
          <Card.Img
            style={styles}
            src="https://images.dog.ceo/breeds/rottweiler/n02106550_4254.jpg"
          />
        </Col>
        <Col lg="3">
          <Card.Img
            style={styles}
            src="https://images.dog.ceo/breeds/collie-border/n02106166_2419.jpg"
          />
        </Col>
        <Col lg="3">
          <Card.Img
            style={styles}
            src="https://images.dog.ceo/breeds/retriever-curly/n02099429_398.jpg"
          />
        </Col>
        <Col lg="3">
          <Card.Img
            style={styles}
            src="https://images.dog.ceo/breeds/collie-border/n02106166_2419.jpg"
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
