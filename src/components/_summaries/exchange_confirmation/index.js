// Library Imports
import React from "react";

// Relative Imports
import { Container, Key, Value, Row } from "./styles";

const ExchangeConfirmation = ({
  conversion_rate,
  from_asset,
  to_asset,
  from_amount,
  to_amount
}) => {
  return (
    <Container>
      <Row>
        <Key>Conversion Rate</Key>
        <Value>{!conversion_rate ? "--" : conversion_rate}</Value>
      </Row>
      <Row>
        <Key>From Asset</Key>
        <Value>
          {!from_asset ? "--" : from_asset} {!from_amount ? "--" : from_amount}
        </Value>
      </Row>
      <Row>
        <Key>To Asset</Key>
        <Value>
          {!to_asset ? "--" : to_asset} {!to_amount ? "--" : to_amount}
        </Value>
      </Row>
      <Row>
        <Key>Priority (Medium)</Key>
        <Value>Unlocks ~2 hours</Value>
      </Row>
      <Row>
        <Key>Fee ($0.00 USD)</Key>
        <Value>0.1234 XHV</Value>
      </Row>
    </Container>
  );
};

export default ExchangeConfirmation;
