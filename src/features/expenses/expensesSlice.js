import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { id: 1, description: 'Water bill', amount: 4500, note: 'January water bill', createdAt: 100 },
    { id: 2, description: 'Gas', amount: 6400, notes: 'gas for work', createdAt: 125 },
    { id: 3, description: 'Groceries', amount: 12300, notes: 'one week of groceries', createdAt: 110 }
];

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense(state, action) {
            state.push(action.payload);
        },
        removeExpense(state, action) {
            const expenseId = action.payload;
            state.expenses = state.expenses.filter((expense) => expense.id !== expenseId);
        }
    }
});


export const selectAllExpenses = (state) => state.expenses;

export const { addExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
