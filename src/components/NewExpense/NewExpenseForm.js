import React, { useState } from "react";
import "../components-css/new-Expense-Form.css";

const NewExpenseForm = (props) => {


  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");


  const titleChangeHandler = (e)=>{
    setEnteredTitle(e.target.value);
  }
  
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const amountChaneHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  if(enteredAmount < 0){
    alert("you cannot enter negative value ")
  }

  return (
      <form className="new-Expense-Form" onSubmit={submitHandler}>
        <div className="new-Expense-Title">
          <label className="title">
            enter item
            <input 
            type="text" 
            placeholder="Enter item"
            value={enteredTitle}
            onChange={titleChangeHandler}/>

          </label>
          <p>{enteredTitle}</p>
        </div>

        <div className="new-Expense-Date">
          <label className="date">
            enter bought date
            <input 
            type="date"
            value={enteredDate} 
            onChange={dateChangeHandler}/>
          </label>
          <p>{enteredDate}</p>
        </div>
        <div className="new-Expense-Amount">
          <label className="amount">
            enter amount
            <input 
            type="number"
             placeholder="Enter amount" 
             pattern="[0-9]*" 
             value={enteredAmount}
             onChange={amountChaneHandler}/>
          </label>
          <p>{enteredAmount}</p>
        </div>
        <button type="submit" value="Enter Expense" className="new-Expense-button">enter expense</button>
      </form>
  );
};

export default NewExpenseForm;


