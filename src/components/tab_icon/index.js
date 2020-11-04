// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Icon } from "./styles";

class TabIcon extends Component {
  handleIcons = () => {
    const { name } = this.props.route;
    const { theme } = this.props;
    const { focused } = this.props;

    if (name === "Assets" && focused) {
      return (
        <Icon source={require("../../assets/tabs/dark/assets-active.png")} />
      );
    } else if (name === "Assets") {
      return (
        <Icon source={require("../../assets/tabs/dark/assets-inactive.png")} />
      );
    } else if (name === "Exchange" && focused) {
      return (
        <Icon source={require("../../assets/tabs/dark/exchange-active.png")} />
      );
    } else if (name === "Exchange") {
      return (
        <Icon
          source={require("../../assets/tabs/dark/exchange-inactive.png")}
        />
      );
    } else if (name === "Transfer" && focused) {
      return (
        <Icon source={require("../../assets/tabs/dark/transfer-active.png")} />
      );
    } else if (name === "Transfer") {
      return (
        <Icon
          source={require("../../assets/tabs/dark/transfer-inactive.png")}
        />
      );
    } else if (name === "Settings" && focused) {
      return (
        <Icon source={require("../../assets/tabs/dark/settings-active.png")} />
      );
    } else if (name === "Settings") {
      return (
        <Icon
          source={require("../../assets/tabs/dark/settings-inactive.png")}
        />
      );
    }
  };

  render() {
    return this.handleIcons();
  }
}

export default TabIcon;
