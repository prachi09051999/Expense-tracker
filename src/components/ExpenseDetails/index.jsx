const ExpenseDetail = (props) => {
  return (<div className="expense-item__description">
      <h2>{props.title}</h2>
      <p className="expense-item__price">₹ {props.amount}</p>
    </div>);
}

export default ExpenseDetail;