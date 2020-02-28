// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Icon } from "./styles";

class TabIcon extends Component {
  handleIcons = () => {
    const { name } = this.props.route;
    const { focused } = this.props;
    if (name === "Assets" && focused) {
      return <Icon source={require("../../assets/tabs/assets-active.png")} />;
    } else if (name === "Assets") {
      return <Icon source={require("../../assets/tabs/assets-inactive.png")} />;
    } else if (name === "Exchange" && focused) {
      return <Icon source={require("../../assets/tabs/exchange-active.png")} />;
    } else if (name === "Exchange") {
      return (
        <Icon source={require("../../assets/tabs/exchange-inactive.png")} />
      );
    } else if (name === "Transfer" && focused) {
      return <Icon source={require("../../assets/tabs/transfer-active.png")} />;
    } else if (name === "Transfer") {
      return (
        <Icon source={require("../../assets/tabs/transfer-inactive.png")} />
      );
    } else if (name === "Settings" && focused) {
      return <Icon source={require("../../assets/tabs/settings-active.png")} />;
    } else if (name === "Settings") {
      return (
        <Icon source={require("../../assets/tabs/settings-inactive.png")} />
      );
    }
  };

  render() {
    return <Container>{this.handleIcons()}</Container>;
  }
}

export default TabIcon;
