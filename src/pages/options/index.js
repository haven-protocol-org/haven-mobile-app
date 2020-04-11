// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import InputLink from "../../components/_inputs/input-link";

class Options extends Component {
  renderOptions = () => {
    const { data } = this.props.route.params;
    const { onPress } = this.props.route.params;
    return data.map(o => {
      const { message, name, priority } = o;
      return (
        <InputLink
          key={name}
          label={`Priority ${name}`}
          value={message}
          border={true}
          icon={false}
          onPress={() => onPress({ name, message, priority })}
        />
      );
    });
  };

  render() {
    this.props.navigation.setOptions({
      title: this.props.route.params.title,
      headerBackTitleVisible: false
    });
    return <Container>{this.renderOptions()}</Container>;
  }
}

export default Options;
