import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseDashboardPage from './pages/ExpenseDashboardPage';
import AddExpensePage from './pages/AddExpensePage';
import EditExpensePage from './pages/EditExpensePage';
import HelpPage from './pages/HelpPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';

import { addExpense } from './redux/actions/expenses';
import getVisibleExpenses from './redux/selectors/expenses';


//const store = configureStore();
//store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    {/*<Route path="/" element={<ExpenseDashboardPage />} exact={true} />*/}
                    <Route path="/" element={<ExpenseDashboardPage />} />
                    <Route path="/create" element={<AddExpensePage />} />
                    <Route path="/edit/:id" element={<EditExpensePage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};


export default App;
