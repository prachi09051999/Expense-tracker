import React , { useState } from 'react';
import ExpensesFilter from "../ExpensesFilter/index";
import Card from '../Card/index';
import './style.css';
import ExpenseList from '../ExpenseList';
import ExpenseChart from '../ExpenseChart';

const Expenses = (props) => {
  // <ExpenseItem title={expense[0].title} price={expense[0].price} date={expense[0].date}/>
  const [selected, setSelected] = useState("2022");

  const storeYearValue = (selectValue) => {
    setSelected(selectValue);
  }

  const filteredData = props.items.filter(expense => expense.date.getFullYear().toString() === selected);

  // let NoDataWarning = <p>No Expense Found</p>;

  // if(filteredData.length>0){
  //   NoDataWarning = filteredData.map(expense=> (expense.date.getFullYear().toString() === selected) && <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date}/>);
  // }

  return (
    // {expense.map((ex,index)=> <ExpenseItem title={ex.title} price={ex.price} key={index} date={ex.date}/>)}
    <Card className="expenses">
      <ExpensesFilter onYearChange={storeYearValue} selected={selected}/>
      <ExpenseChart expenses={filteredData}/>
      <ExpenseList items={filteredData}/>
     {/* {props.items.map(expense=> {
     return (expense.date.getFullYear().toString() === selected) && 
     <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date}/>})} */}
    </Card>  
   );

}

export default Expenses;