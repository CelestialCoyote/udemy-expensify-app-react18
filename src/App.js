import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseDashboardPage from './pages/ExpenseDashboardPage';
import AddExpensePage from './pages/AddExpensePage';
import EditExpensePage from './pages/EditExpensePage';
import HelpPage from './pages/HelpPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<ExpenseDashboardPage />} />
                    <Route path="/add" element={<AddExpensePage />} />
                    <Route path="/edit/:id" element={<EditExpensePage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route element={<NotFoundPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};


export default App;
