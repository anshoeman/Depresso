import { View, Button, Text, TouchableOpacity } from "react-native";
import { Card, Image } from "react-native-elements";
const AnalyticsList = [
  {
    id: 1,
    Name: "Check Your Weekly Report",
    ScreenNavigation: "Graph",
  },
  {
    id: 2,
    Name: "Check Your Screen Time",
    ScreenNavigation: "ScreenTime",
  },
  {
    id: 3,
    Name: "Check Your Current Progress",
    ScreenNavigation: "CurrentProgress",
  },
];
export default function Analytics({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 30, fontWeight: "bold", padding: 20 }}>
        Your Daily And Weekly Progress
      </Text>
      {AnalyticsList.map((x) => (
        <Card>
          <Card.Title>{x.Name}</Card.Title>
          <TouchableOpacity>
            <Button
              title="Check"
              color="lightblue"
              onPress={() => navigation.navigate(`${x.ScreenNavigation}`)}
            />
          </TouchableOpacity>
        </Card>
      ))}
    </View>
  );
}
