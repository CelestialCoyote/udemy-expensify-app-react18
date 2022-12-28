import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        addExpense: state => {
            return [
                ...state,
                action.expense
            ];
        },
        removeExpense: state => {
            return state.filter(({ id }) => id !== action.id);
        },
        //editExpense: () => {
        //    return state.map((expense) => {
        //        if (expense.id === action.id) {
        //            return {
        //                ...expense,
        //                ...action.updates
        //            };
        //        } else {
        //            return expense;
        //        };
        //    }
        //}
    }
});


export const { addExpense, removeExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
