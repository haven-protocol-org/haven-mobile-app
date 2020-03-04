// Library Imports
import React from "react";

// Relative Imports
import { Container, Row } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const Token = ({ onPress, token, ticker, price, change }) => {
  return (
    <Container onPress={onPress}>
      <Row>
        <Primary>{token}</Primary>
        <Primary>{ticker}</Primary>
      </Row>
      <Row>
        <Secondary>{price}</Secondary>
        <Secondary>{change}</Secondary>
      </Row>
    </Container>
  );
};

export default Token;
