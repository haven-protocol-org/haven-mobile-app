// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Row, Header } from "./styles";
import { Primary, Secondary } from "../../constants/type.js";
import Border from "../border/index.js";

class TransactionDetail extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Primary>Transaction Details</Primary>
        </Header>
        <Border />
        <Row>
          <Secondary>Transfer Asset</Secondary>
          <Secondary>XHV</Secondary>
        </Row>
        <Row>
          <Secondary>Recipient Address</Secondary>
          <Secondary>xhv123.321</Secondary>
        </Row>
        <Row>
          <Secondary>Payment ID</Secondary>
          <Secondary>--</Secondary>
        </Row>
      </Container>
    );
  }
}

export default TransactionDetail;
