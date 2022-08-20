import "./App.css";
import { Card } from "./components/UI/Card";
import ExpenseItemHeader from "./components/Expenses/ExpenseItemHeader";
import { Expenses } from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(dummy_Expenses)


  const addExpenseHandler = expense => {
    console.log("app.js");
    console.log(expense)
    setExpense(prevExpenses => {
      return [expense, ...expenses];
    });
  }


  return (
    <div className="App">
      <div className="app-header">
        <h1>Mostafa Mohammedi</h1>
        <h2>Let's get startet</h2>
      </div>
      <Card className="expense-Item-App">
      <NewExpense onAddExpsense={addExpenseHandler}/>
      <Expenses items={expenses} />
      
      </Card>
    </div>
  );
}

export default App;
