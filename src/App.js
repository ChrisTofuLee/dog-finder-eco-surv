import "./App.css";
import DataSelect from "./containers/DataSelect";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Container className="App">
      <h1 style={{padding: "20px"}}>Random Dog Generator</h1>
      <DataSelect />
      
    </Container>

  );
}

export default App;
