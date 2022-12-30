import React from 'react';
import { connect } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';


const AddExpensePage = () => {
    return (
        <div>
            <h1>Add Expense</h1>
            <AddExpenseForm />
        </div>
    );
};


export default connect()(AddExpensePage);
