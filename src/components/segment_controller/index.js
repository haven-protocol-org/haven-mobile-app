// Library Imports
import React from "react";
import { SegmentedControlIOS } from "react-native";

// Relative Imports
import {
  Container,
  Tab,
  Label,
  Active,
  Inactive,
  Selected,
  Deselected
} from "./styles";

const SegmentedController = ({ values, selectedIndex, onChange, onPress }) => {
  return (
    <Container>
      {selectedIndex == 0 && (
        <Tab>
          <Active onPress={() => onPress(0)}>
            <Selected>{values[0]}</Selected>
          </Active>
          <Inactive onPress={() => onPress(1)}>
            <Deselected>{values[1]}</Deselected>
          </Inactive>
        </Tab>
      )}
      {selectedIndex == 1 && (
        <Tab>
          <Inactive onPress={() => onPress(0)}>
            <Deselected>{values[0]}</Deselected>
          </Inactive>
          <Active onPress={() => onPress(1)}>
            <Selected>{values[1]}</Selected>
          </Active>
        </Tab>
      )}
    </Container>
  );
};

export default SegmentedController;
