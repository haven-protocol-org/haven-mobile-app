// Library Imports
import React from "react";

// Relative Imports
import { Container, Key, Value, Row } from "./styles";

const TransferConfirmation = ({
  from_ticker,
  from_asset,
  from_amount,
  recipient,
  payment_id,
}) => {
  return (
    <Container>
      <Row>
        <Key>From Asset</Key>
        <Value>
          {from_amount} {from_asset}
        </Value>
      </Row>

      <Row>
        <Key>Recipient</Key>
        <Value>{recipient}</Value>
      </Row>

      <Row>
        <Key>Fee ($0.00 USD)</Key>
        <Value>0.1234 XHV</Value>
      </Row>
    </Container>
  );
};

export default TransferConfirmation;
