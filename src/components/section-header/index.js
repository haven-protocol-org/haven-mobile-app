// Library Imports
import React from "react";

// Relative Imports
import { Container, Border } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const SectionHeader = ({ title, subtitle, border }) => {
  return (
    <Container>
      <Primary>{title}</Primary>
      <Secondary>{subtitle}</Secondary>
      {border && <Border />}
    </Container>
  );
};

export default SectionHeader;
