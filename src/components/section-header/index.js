// Library Imports
import React from "react";

// Relative Imports
import { Container, Border } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <Primary>{title}</Primary>
      <Secondary>{subtitle}</Secondary>
      <Border />
    </Container>
  );
};

export default SectionHeader;
