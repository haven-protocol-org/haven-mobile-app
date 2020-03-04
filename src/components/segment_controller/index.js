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
          tintColor: "#000000",
          borderColor: "white",
          color: "yellow"
        }}
        values={values}
        selectedIndex={selectedIndex}
        onChange={onChange}
        tintColor={"#D6573D"}
      />
    </Container>
  );
};

export default SegmentedController;
