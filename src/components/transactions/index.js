// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const Transaction = () => {
  return (
    <Container>
      <Primary>Primary</Primary>
      <Primary>Secondary</Primary>
    </Container>
  );
};

export default Transaction;
