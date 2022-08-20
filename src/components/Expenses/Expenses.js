import React, { useState } from "react";
import { Card } from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseItemHeader from "./ExpenseItemHeader";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const test = (selectYear) => {
    console.log("Expenses.js");
    console.log(selectYear);

    setFilteredYear(selectYear);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseHeader = <></>;

  let expenseContent = <p className="noContent">No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expenseHeader = <ExpenseItemHeader />;
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card>
      <ExpenseFilter
        selected={filteredYear}
        filterChangeHandler={test}
        onChangeFilter={filterChangeHandler}
      />
      {expenseHeader}
      {expenseContent}
    </Card>
  );
};
