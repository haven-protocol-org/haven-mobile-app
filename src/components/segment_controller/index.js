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
          borderColor: "gray",
          borderWidth: 0.5,
          height: 32
        }}
        values={values}
        selectedIndex={selectedIndex}
        onChange={onChange}
      />
    </Container>
  );
};

export default SegmentedController;
