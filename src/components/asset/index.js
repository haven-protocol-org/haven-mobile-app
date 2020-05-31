// Library Imports
import React from "react";

// Relative Imports
import { Container, Title, Row, Label } from "./styles";

const Asset = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Row>
        <Title>United States Dollar</Title>
        <Title>xUSD</Title>
      </Row>
      <Row>
        <Label>$1.00</Label>
        <Label>$0.00</Label>
      </Row>
    </Container>
  );
};

export default Asset;
