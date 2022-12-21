import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { addExpense } from '../redux/actions/expenses';


const AddExpensePage = (props) => {
    let navigate = useNavigate();

    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    navigate('/');
                }}
            />
        </div>
    );
};


export default connect()(AddExpensePage);
