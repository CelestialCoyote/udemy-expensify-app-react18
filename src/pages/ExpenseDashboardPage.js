import React from 'react';
//import ExpenseList from '../components/ExpenseList';
//import ExpenseListFilters from '../components/ExpenseListFilters';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';
import ExpensesList from '../components/ExpensesList/ExpensesList';


const ExpenseDashboardPage = () => (
    <div>
        {/*<ExpenseListFilters />*/}
        {/*<ExpenseList />*/}
        <AddExpenseForm />
        <ExpensesList />
    </div>
);


export default ExpenseDashboardPage;
