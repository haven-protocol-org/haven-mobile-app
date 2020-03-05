// Library Imports
import React, { Component } from "react";
import { Balance, Secondary } from "../../constants/type.js";

// Relative Imports
import { Container } from "./styles";

const Charts = ({ token }) => {
  return (
    <Container>
      <Balance>{token} Chart </Balance>
    </Container>
  );
};

export default Charts;
