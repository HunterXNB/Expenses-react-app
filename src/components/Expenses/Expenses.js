import React, { useState } from "react";
import "./expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filteredYear, setfilteredYear] = useState("2010")
    const onFilterChange = (passed) => {
        setfilteredYear(passed)
    }
    let filteredExpenses = props.exp.filter((expenses, index) => (expenses.date.getFullYear().toString() === filteredYear))

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilter={onFilterChange} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList exp={filteredExpenses} />
            </Card>
        </div>
    )

}
export default Expenses