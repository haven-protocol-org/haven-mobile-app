// Library Imports
import React from "react";

// Relative Imports
import { Container, Column, Row } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const BalanceStatistic = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Primary>$1.00</Primary>
          <Secondary>Price</Secondary>
        </Column>
        <Column>
          <Primary>2452.12</Primary>
          <Secondary>Amount</Secondary>
        </Column>
        <Column>
          <Primary>1921.31</Primary>
          <Secondary>Value</Secondary>
        </Column>
      </Row>
    </Container>
  );
};

export default BalanceStatistic;
