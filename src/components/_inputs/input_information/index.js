// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import { Information } from "../../../constants/type.js";

const Input_Information = ({ copy }) => {
  return (
    <Container>
      <Information>{copy}</Information>
    </Container>
  );
};

export default Input_Information;
