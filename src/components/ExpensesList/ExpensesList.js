import React from "react";
import { useSelector } from "react-redux";
import { selectAllExpenses } from "../../features/expenses/expensesSlice";


const ExpensesList = () => {
    const expenses = useSelector(selectAllExpenses);
    console.log(expenses);

    const ExpenseListItem = expenses.map(expense => (
        <div className="expense-list-item" key={expense.id}>
            {/*<Link to={`/edit/${id}`}>*/}
                <h3>{expense.description}</h3>
            {/*</Link>*/}
            <p>{expense.amount} - {expense.createdAt}</p>
            <p>{expense.note}</p>
        </div>
    ));

    return (
        <div>
            {ExpenseListItem}
        </div>
    )
}


export default ExpensesList