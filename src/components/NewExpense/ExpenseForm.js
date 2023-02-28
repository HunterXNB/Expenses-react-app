import React, { useState } from "react";
import "./ReactForm.css"

const ExpenseForm = (props) => {


    const [userInput, setuserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })
    const titleChangeHandler = (event) => {
        setuserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }
    const amountChangeHandler = event => {
        setuserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value }
        })
    }
    const dateChangeHandler = event => {
        setuserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value }
        })
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)


    }



    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">
                    Title
                </label>
                <input type="text" id="title" value={userInput.enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">
                    Amount
                </label>
                <input type="number" id="amount" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">
                    Date
                </label>
                <input type="date" id="date" min="2010-1-1" max="2037-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
            </div>

        </div>
        <div className="new-expense__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}
export default ExpenseForm