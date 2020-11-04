// Library Imports
import React, { Component } from "react";

// Relative Imports
// import { Icon } from "./styles.js";
import LightTabIcons from "./light/index.js";
import DarkTabIcons from "./dark/index.js";

class TabIcon extends Component {
  render() {
    const { theme, focused } = this.props;
    const { name } = this.props.route;

    return theme === "dark" ? (
      <DarkTabIcons name={name} focused={focused} />
    ) : (
      <LightTabIcons name={name} focused={focused} />
    );
  }
}

export default TabIcon;
