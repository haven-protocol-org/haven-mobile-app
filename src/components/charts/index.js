// Library Imports
import React, { Component } from "react";
import { Balance, Secondary } from "../../constants/type.js";
import { BarChart, XAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";

// Relative Imports
import { Container } from "./styles";

const Charts = ({ token }) => {
  const data = [14, 80, 100, 55];

  return (
    <Container>
      <Balance>
        Test
        <BarChart
          style={{ flex: 1 }}
          data={data}
          gridMin={0}
          svg={{ fill: "rgb(134, 65, 244)" }}
        />
        <XAxis
          style={{ marginTop: 10 }}
          data={data}
          scale={scale.scaleBand}
          spacingInner={0.05}
          svg={{ fontSize: 10, fill: "grey" }}
          formatLabel={(value, index) => index}
          labelStyle={{ color: "black" }}
        />
      </Balance>
    </Container>
  );
};

export default Charts;
