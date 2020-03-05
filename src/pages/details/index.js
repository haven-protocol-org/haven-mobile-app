// Library Imports
import React, { Component } from "react";
import Charts from "../../components/charts/index.js";
import SectionHeader from "../../components/section-header/index.js";

// Relative Imports
import { Container } from "./styles";

class Details extends Component {
  render() {
    return (
      <Container>
        <Charts />
        <SectionHeader
          title="Transaction History"
          subtitle="Overview of your transaction history"
        />
      </Container>
    );
  }
}

export default Details;
