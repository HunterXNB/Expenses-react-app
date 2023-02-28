import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./expenseItem";

const ExpensesList = (props) => {
    if (props.exp.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    return (
        <ul className="expenses-list">
            {props.exp.map((expenses => (<ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />)))}
        </ul>
    )
}
export default ExpensesList