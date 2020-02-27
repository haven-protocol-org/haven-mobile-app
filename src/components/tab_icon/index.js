// Library Imports
import React from "react";

// Relative Imports
import { Container, Icon } from "./styles";

const TabIcon = ({ route, focused }) => {
  return (
    <Container>
      {focused ? (
        <Icon source={require("../../assets/tabs/assets-active.png")} />
      ) : (
        <Icon source={require("../../assets/tabs/exchange.png")} />
      )}
    </Container>
  );
};

export default TabIcon;
