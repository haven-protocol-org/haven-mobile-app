// Library Imports
import React, { Component, Fragment } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// Relative Imports
import {
  Container,
  Button,
  Label,
  Footer,
  Link,
  Logo,
  Column,
  Tagline,
  Cells
} from "./styles";
import InputText from "../../../components/_inputs/input-text";
import InputLink from "../../../components/_inputs/input-link";

import Border from "../../../components/border";
import Next from "../../../components/next";
import Input_Information from "../../../components/_inputs/input_information";

class Welcome extends Component {
  render() {
    this.props.navigation.setOptions({
      title: "Welcome"
    });
    return (
      <Container>
        <Column>
          <Logo source={require("../../../assets/icon/icon/icon.png")} />
          <Tagline>Private Decentralized</Tagline>
          <Tagline>Finance</Tagline>
        </Column>
        <Cells>
          <SafeAreaView>
            <InputLink
              label="Need to Login?"
              value={"Open a Vault"}
              border={true}
              onPress={() => this.props.navigation.navigate("Login")}
            />
            <InputLink
              label="Want a vault?"
              value={"Create a vault"}
              border={true}
              onPress={() =>
                this.props.navigation.navigate("Security", {
                  type: "create"
                })
              }
            />
            <InputLink
              label="Have a vault?"
              value={"Restore a Vault"}
              onPress={() => this.props.navigation.navigate("Restore")}
            />
          </SafeAreaView>
        </Cells>
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  authUser: state.authUser
});

export default Welcome;
