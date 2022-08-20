import "../components-css/Card.css";
import { BsCartCheck } from "react-icons/bs";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";

export default function ExpenseItem (props) {
  return (
    <Card className="expense-Item">
      <div className="expense-Item-Content">
        <div className="expense-Item-Title">
          <p>{props.title}</p>
        </div>
        <div className="expense-Item-Date">
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-Item-Amount">
          <p>Kr {props.amount},- </p>
          <p className="icon"></p>
        </div>
        <div className="icon">
          <p>
            <BsCartCheck />
          </p>
        </div>
      </div>
    </Card>
  );
};
