import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1.5, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

// no need display:flex
// 기본적으로 모든 View는 flex container이다.
// overflow 된다해도 옆으로 스크롤 할 수 없다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
  },
  text: {
    fontSize: 28,
    color: "blue",
  },
  left: {
    flex: 1,
    backgroundColor: "red",
  },
});
