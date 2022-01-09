import ExpenseItem from '../ExpenseItem/index';
import './style.css';

const ExpenseList = (props) => {
if(props.items.length === 0) return (
  <p className="expenses-list__fallback">Found No Expense</p>
);

return (
  <ul className="expenses-list">
    {props.items.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
  </ul>
);
}

export default ExpenseList;