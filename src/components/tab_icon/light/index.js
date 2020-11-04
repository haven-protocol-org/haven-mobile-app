// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Icon } from "./styles";

class LightTabIcons extends Component {
  handleLightIcons = () => {
    const { name, focused } = this.props;

    if (name === "Assets" && focused) {
      return (
        <Icon
          source={require("../../../assets/tabs/light/assets-active.png")}
        />
      );
    } else if (name === "Assets") {
      return (
        <Icon
          source={require("../../../assets/tabs/light/assets-inactive.png")}
        />
      );
    } else if (name === "Exchange" && focused) {
      return (
        <Icon
          source={require("../../../assets/tabs/light/exchange-active.png")}
        />
      );
    } else if (name === "Exchange") {
      return (
        <Icon
          source={require("../../../assets/tabs/light/exchange-inactive.png")}
        />
      );
    } else if (name === "Transfer" && focused) {
      return (
        <Icon
          source={require("../../../assets/tabs/light/transfer-active.png")}
        />
      );
    } else if (name === "Transfer") {
      return (
        <Icon
          source={require("../../../assets/tabs/light/transfer-inactive.png")}
        />
      );
    } else if (name === "Settings" && focused) {
      return (
        <Icon
          source={require("../../../assets/tabs/light/settings-active.png")}
        />
      );
    } else if (name === "Settings") {
      return (
        <Icon
          source={require("../../../assets/tabs/light/settings-inactive.png")}
        />
      );
    }
  };

  render() {
    return this.handleLightIcons();
  }
}

export default LightTabIcons;
