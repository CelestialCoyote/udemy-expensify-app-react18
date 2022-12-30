import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectAllExpenses, removeExpense } from "../../features/expenses/expensesSlice";
import './ExpensesList.css';


const ExpensesList = () => {
    const dispatch = useDispatch();
    const expenses = useSelector(selectAllExpenses);
    console.log(expenses);

    const deleteExpense = (id) => {
        dispatch(
            removeExpense(id)
        );
    };

    const ExpenseListItem = expenses.map(expense => (
        <div className="expense-list-item" key={expense.id}>
            <Link to={`/edit/${expense.id}`}>
                <h3>{expense.description}</h3>
            </Link>
            <p>{expense.amount} - {expense.createdAt}</p>
            <p>{expense.note}</p>
            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </div>
    ));

    return (
        <div>
            {ExpenseListItem}
        </div>
    )
}


export default ExpensesList