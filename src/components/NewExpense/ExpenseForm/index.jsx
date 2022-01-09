import React , { useState } from 'react';
import './style.css';

const ExpenseForm = (props) => {

  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');
  const [date,setDate] = useState('');
 
  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.value);
  }
  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpenseData = {
      title:title,
      amount:+amount,
      date:new Date(date)
    }
    if(title !== '' && amount !== '' && date !== '')
    props.onFormSubmit(newExpenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  const closeModalHandler = () => {
      props.onModalChange();
  }


  return  (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" value={amount} onChange={handleAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Expense date</label>
          <input type="date" value={date} onChange={handleDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={closeModalHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div> 
    </form>);
  
}

export default ExpenseForm;