// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Label } from "./styles";
import SectionHeader from "../../components/section-header";
import PageWrapper from "../../components/page-wrapper";
import InputToggle from "../../components/cells/cell/index.js";

class Settings extends Component {
  render() {
    return (
      <Container>
        <PageWrapper>
          <SectionHeader
            title="Theme"
            subtitle="Choose between light and dark themes"
          />
          <InputToggle value="Dark Theme" label="Select Theme" />
          <SectionHeader
            title="Private Keys"
            subtitle="Manage your wallets private keys"
          />
        </PageWrapper>
      </Container>
    );
  }
}

export default Settings;
