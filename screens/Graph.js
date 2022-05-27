import { View, Text, Dimensions } from "react-native";
import React from "react";
import { BarChart, LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      data: [12, 23, 12, 4, 7, 5, 1],
    },
  ],
};
const ChartConfig = {
  color: () => `green`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 2,
  useShadowColorFromDataset: false, // optional
};
export default function Graph() {
  return (
    <>
      <Text style={{ fontSize: 30, fontWeight: "bold", padding: 20 }}>
        Your Weekly Progress
      </Text>
      <View style={{ height: 300, display: "flex", justifyContent: "center" }}>
        <LineChart
          data={data}
          width={screenWidth}
          height={280}
          verticalLabelRotation={30}
          chartConfig={ChartConfig}
          bezier
          style={{
            borderRadius: 110,
          }}
        />
      </View>
    </>
  );
}
