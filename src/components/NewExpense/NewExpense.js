import React from "react";
import "../components-css/new-Expense.css";
import { Card } from "../UI/Card";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpsense(expenseData);


  }
  return (
    <Card className="expense-Item">
    <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </Card>
  )
}

export default NewExpense