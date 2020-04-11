// Library Imports
import React from "react";

// Relative Imports
import { Container, Key, Value, Row } from "./styles";

const ExchangeSummary = ({
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
        <Value>{conversion_rate}</Value>
      </Row>
      <Row>
        <Key>From Asset</Key>
        <Value>
          {!from_asset ? "--" : from_asset} {from_amount}
        </Value>
      </Row>
      <Row>
        <Key>To Asset</Key>
        <Value>
          {!to_asset ? "--" : to_asset} {to_amount}
        </Value>
      </Row>
    </Container>
  );
};

export default ExchangeSummary;
