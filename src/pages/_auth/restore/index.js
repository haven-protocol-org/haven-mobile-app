// Library Imports
import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
// Relative Imports
import {
  Container,
  Button,
  Label,
  Box,
  Inner,
  Row,
  Header,
  Image,
  ImageWrapper,
  ButtonLabel
} from "./styles";
import Input from "../../../components/input";
import Description from "../../../components/description";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border";
import Next from "../../../components/next";

class Restore extends Component {
  render() {
    return (
      <Container>
        <Text>Restore</Text>
      </Container>
    );
  }
}

export default Restore;
