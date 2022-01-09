import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

function App() {
  const [expense,setExpense] = useState([
    {
      id:1,
      title: "shopping",
      amount: 78,
      date: new Date(2022,1,3)
    },
    {
      id:2,
      title: "food",
      amount: 45,
      date: new Date(2022 ,1 ,4)
    }
  ]);

  const addExpenseHandler = (savedData) => {
    const data = {
      ...savedData
    }
    setExpense((prevList)=>[data,...prevList]);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
