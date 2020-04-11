// Library Imports
import React from "react";

// Relative Imports
import { Container, Key, Value, Row } from "./styles";

const ExchangeConfirmation = ({
  from_ticker,
  from_value,
  from_token,
  from_amount,
  ftom_asset,
  to_ticker,
  to_value,
  to_asset,
  to_token,
  to_amount,
  to_address,
  selectedIndex,
  priority,
  type,
  conversion_rate
}) => {
  return (
    <Container>
      <Row>
        <Key>Conversion Rate</Key>
        <Value>{conversion_rate}</Value>
      </Row>
      <Row>
        <Key>From Asset</Key>
        <Value>{from_amount}</Value>
      </Row>
      <Row>
        <Key>To Asset</Key>
        <Value>{to_asset}</Value>
      </Row>
      <Row>
        <Key>Priority</Key>
        <Value>{priority}</Value>
      </Row>
      <Row>
        <Key>Fee ($0.00 USD)</Key>
        <Value>0.1234 XHV</Value>
      </Row>
    </Container>
  );
};

export default ExchangeConfirmation;
