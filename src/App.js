import logo from "./logo.svg";
import "./App.css";
import DataSelect from "./containers/DataSelect";
import UrlContext from "./context/UrlContext";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";



function App() {
  const [url, setUrl] = useState([])
  return (
    <Container className="App">
      <h1 style={{padding: "20px"}}>Random Dog Generator</h1>
        <UrlContext.Provider value={{url, setUrl}}>
      <DataSelect />
      
      </UrlContext.Provider>
      

    </Container>

  );
}

export default App;
