import { View, Text, StyleSheet } from "react-native";

function GoalItem({ itemText }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemText}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
