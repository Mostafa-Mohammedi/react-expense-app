import React from "react";
import "../components-css/expense-Item-Header.css";

const ExpenseItemHeader = () => {
  return (
    <div className="expense-Item">
      <div className="expense-Item-Header-Content">
        <h2 className="header-Tag-Expense-Item">Exspenses</h2>
      </div>
      <div className="expense-Item-Content">
        <div className="expense-Item-Title">
          <h3>Item Bought</h3>
        </div>
        <div className="expense-Item-Date">
          <h3>Date</h3>
        </div>
        <div className="expense-Item-Amount">
          <h3>Amount</h3>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItemHeader;
