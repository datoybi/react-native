import { View, StyleSheet, Text } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expenses, expensePeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      {content}
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary200,
    flex: 1,
  },
  infoText: {
    color: GlobalStyles.colors.primary800,
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
