import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem/ExpenseListItem';
import selectExpenses from '../redux/selectors/expenses';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


export default connect(mapStateToProps)(ExpenseList);
