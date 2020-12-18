// Library Imports
import React, { Component } from "react";
import { Balance, Secondary } from "../../constants/type.js";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { withTheme } from "styled-components";
import moment from "moment";
import axios from "axios";

// Relative Imports
import { Container } from "./styles";

// Relative Imports

class Charts extends Component {
  state = {
    loading: true,
  };

  render() {
    const { deviation } = this.props.data;
    let spot = [];
    let average = [];
    let date = [];

    if (deviation === undefined) {
    }

    if (deviation !== undefined) {
      for (var i = 0; i < deviation.length; i++) {
        spot.push(deviation[i][`xUSD-ma`]);
        average.push(deviation[i][`xUSD-spot`]);
        date.push(moment(deviation[i].period).format("MMM Do"));
      }
    }

    return (
      <Container>
        <Balance>
          <LineChart
            data={{
              labels: date,
              datasets: [{ data: average }],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={240}
            yAxisLabel="$"
            yAxisSuffix="k"
            withOuterLines={false}
            withVerticalLabels={false}
            withDots={false}
            withShadow={false}
            withHorizontalLabels={false}
            segments={-1}
            yAxisInterval={100} // optional, defaults to 1
            yAxisInterval={100} // optional, defaults to 1
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `#8ea1e1`,
              backgroundGradientFromOpacity: 0,
              backgroundGradientToOpacity: 0,
              style: {
                borderRadius: 0,
                background: "#5f4295",
              },
              propsForBackgroundLines: {
                stroke: "#2B2E32",
              },
              propsForDots: {
                r: "2",
                strokeWidth: "1",
                stroke: "#8ea1e1",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 0,
            }}
          />
        </Balance>
      </Container>
    );
  }
}

export default Charts;

//
// const Charts = ({ token, data }) => {
//   let average = [];
//   let date = [];
//
//   console.log(data.length);
//
//   for (var i = 0; i < data.length; i++) {
//     average.push(price[i][`xUSD-ma`]);
//     date.push(moment(data[i].period).format("MMM Do"));
//   }
//
//   return (
//     <Container>
//       <Balance>
//         <LineChart
//           data={{
//             labels: date,
//             datasets: [{ data: [average] }],
//           }}
//           width={Dimensions.get("window").width} // from react-native
//           height={240}
//           yAxisLabel="$"
//           yAxisSuffix="k"
//           withOuterLines={false}
//           withVerticalLabels={false}
//           withDots={false}
//           withShadow={false}
//           withHorizontalLabels={false}
//           segments={1}
//           yAxisInterval={100} // optional, defaults to 1
//           yAxisInterval={100} // optional, defaults to 1
//           chartConfig={{
//             decimalPlaces: 2, // optional, defaults to 2dp
//             color: (opacity = 1) => `#8ea1e1`,
//             style: {
//               borderRadius: 0,
//             },
//
//             propsForDots: {
//               r: "2",
//               strokeWidth: "1",
//               stroke: "#8ea1e1",
//             },
//           }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 0,
//           }}
//         />
//       </Balance>
//     </Container>
//   );
// };
//
// export default Charts;
