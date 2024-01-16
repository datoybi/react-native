import { Text } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpenseOutput
      expenses={recentExpenses}
      expensePeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
