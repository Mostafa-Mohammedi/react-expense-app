import React from "react";
import "../components-css/expenseFilter.css";

const ExpenseFilter = (props) => {
  const selectFilterYear = (e) => {
    props.filterChangeHandler(e.target.value);
  };
  return (
    <div className="dropDownList">
        <label className="labelYear">Filter by Year</label>
        <select
          value={props.selected}
          className="select"
          onChange={selectFilterYear}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
    </div>
  );
};

export default ExpenseFilter;
