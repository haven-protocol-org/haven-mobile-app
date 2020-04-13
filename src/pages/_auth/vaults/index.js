// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import InputLink from "../../../components/_inputs/input-link";

class Vaults extends Component {
  renderOptions = () => {
    const { data } = this.props.route.params;
    const { onPress } = this.props.route.params;
    return data.map(o => {
      const { address, name } = o;

      return (
        <InputLink
          key={name}
          label={"Vault"}
          value={name}
          border={true}
          icon={false}
          onPress={() => onPress({ name, address })}
        />
      );
    });
  };

  render() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false
    });
    return <Container>{this.renderOptions()}</Container>;
  }
}

export default Vaults;
