import ExpenseDate from '../ExpenseDate';
import './style.css';
import ExpenseDetail from '../ExpenseDetails';
import Card from '../Card';

function ExpenseItem (props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate {...props}/>
        <ExpenseDetail title={props.title} amount={props.amount}/>
      </Card>
    </li>
  
  );
}
export default ExpenseItem;