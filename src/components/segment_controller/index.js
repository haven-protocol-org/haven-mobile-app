// Library Imports
import React from "react";
import { SegmentedControlIOS } from "react-native";

// Relative Imports
import { Container } from "./styles";

const SegmentedController = ({ values, selectedIndex, onChange }) => {
  return (
    <Container>
      <SegmentedControlIOS
        tintColor={"yellow"}
        style={{
          borderWidth: 0.5,
          height: 32,
          tintColor: "green",
          borderColor: `${props => props.theme.body.border}`,
          color: "yellow"
        }}
        values={values}
        selectedIndex={selectedIndex}
        onChange={onChange}
      />
    </Container>
  );
};

export default SegmentedController;
