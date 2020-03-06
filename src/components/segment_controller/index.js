// Library Imports
import React from "react";
import { SegmentedControlIOS } from "react-native";

// Relative Imports
import { Container } from "./styles";

const SegmentedController = ({ values, selectedIndex, onChange }) => {
  return (
    <Container>
      <SegmentedControlIOS
        style={{
          borderWidth: 0.5,
          height: 32,
          borderColor: "#3A4048",
          color: "yellow",
          tintColor: "#fff"
        }}
        values={values}
        selectedIndex={selectedIndex}
        onChange={onChange}
      />
    </Container>
  );
};

export default SegmentedController;
