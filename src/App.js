import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import React, { useState, useEffect } from 'react';
import Expenses from './components/Expenses/Expenses';
import { db } from './config';
import { useFirestore } from './usefirestore';
import Total from './components/TotalExpenses/total';



function App() {
  const { expe } = useFirestore()

  const [total, setTotal] = useState(0)
  const [expenses, setexpenses] = useState([])
  useEffect(() => {
    let timer = setTimeout(() => {
      setexpenses(() => expe)
    }, 1000);
    return () => clearTimeout(timer)
  }, [expe]);
  useEffect(() => {
    setTotal((prev) => {

      if (expenses.length === 0) return prev
      let totale = Array.from(expenses).map(el => el.amount).reduce((acc, el) => {
        return acc + el
      })
      return totale

    })
  }, [expenses]);
  const addExpenseHandler = (expense) => {
    setexpenses(prevexpense => [expense, ...prevexpense])
    db.collection("items").add(expense)
  }
  return (
    <div>

      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses exp={expenses}></Expenses>
      <Total total={total}></Total>
    </div>
  );
}

export default App;
