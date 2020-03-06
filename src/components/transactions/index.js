// Library Imports
import React from "react";

// Relative Imports
import { Container, State, Status, Column, Row } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";

const Transaction = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Primary>123.45</Primary>
          <Secondary>Amount</Secondary>
        </Column>
        <Column>
          <Primary>$502.12</Primary>
          <Secondary right>Value </Secondary>
        </Column>
      </Row>

      <Row>
        <Column>
          <Primary>0.01 USD</Primary>
          <Secondary>Fee</Secondary>
        </Column>
        <Column>
          <Primary>Feb 1, 2020</Primary>
          <Secondary right>Date </Secondary>
        </Column>
      </Row>

      <Row>
        <Column>
          <Primary>xhv1234....4321</Primary>
          <Secondary>Reciept</Secondary>
        </Column>
        <Column>
          <Primary>Completed</Primary>
          <Secondary right>Status</Secondary>
        </Column>
      </Row>
      <State>
        <Status status={"Sent"}>Completed</Status>
      </State>
    </Container>
  );
};

export default Transaction;

// amount, status, value, fee, block, date, recipet, state
