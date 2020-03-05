// Library Imports
import React, { Component } from "react";
import Charts from "../../components/charts/index.js";

// Relative Imports
import { Container } from "./styles";

class Details extends Component {
  render() {
    return (
      <Container>
        <Charts />
      </Container>
    );
  }
}

export default Details;
