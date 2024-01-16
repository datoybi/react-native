import { Text } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpenseOutput
      expenses={expensesCtx.expenses}
      expensePeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}

export default AllExpenses;
