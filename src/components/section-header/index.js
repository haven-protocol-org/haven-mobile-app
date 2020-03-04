// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <Primary>{title}</Primary>
      <Secondary>{subtitle}</Secondary>
    </Container>
  );
};

export default SectionHeader;
