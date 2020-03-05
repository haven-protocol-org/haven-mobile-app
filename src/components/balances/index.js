// Library Imports
import React, { Component } from "react";
import { Balance, Secondary } from "../../constants/type.js";

// Relative Imports
import { Button, Container, Border } from "./styles";

const Balances = ({ totalBalance, balanceLabel }) => {
  return (
    <>
      <Container>
        <Balance>{totalBalance}</Balance>
        <Secondary>{balanceLabel}</Secondary>
      </Container>
      <Border />
    </>
  );
};

export default Balances;
