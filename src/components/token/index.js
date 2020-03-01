// Library Imports
import React from "react";

// Relative Imports
import { Container, Title, Row, Label } from "./styles";

const Token = ({ onPress, token, ticker, price, change }) => {
  return (
    <Container
      onPress={() => {
        console.log(ticker);
      }}
    >
      <Row>
        <Title>{token}</Title>
        <Title>{ticker}</Title>
      </Row>
      <Row>
        <Label>{price}</Label>
        <Label>{change}</Label>
      </Row>
    </Container>
  );
};

export default Token;
