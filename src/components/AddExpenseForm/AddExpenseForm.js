import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
//import moment from 'moment';
import { expenseAdded } from '../../features/expenses/expensesSlice';
import moment from 'moment';

const AddExpenseForm = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    //const [createdAt, setCreatedAt] = useState(moment());
    const [error, setError] = useState('');

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const onAmountChange = (e) => {
        const amountEntered = e.target.value;

        if (!amountEntered || amountEntered.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(amountEntered);
        }
    };

    const onNoteChange = (e) => {
        setNote(e.target.value);
    };

    //onDateChange = (createdAt) => {
    //    if (createdAt) {
    //        this.setState(() => ({ createdAt }));
    //    }
    //};

    const onSubmit = (e) => {
        e.preventDefault();

        if (!description || !amount) {
            setError('Please provide description and amount.');
        } else {
            setError('');
            dispatch(
                expenseAdded({
                    id: nanoid(),
                    description,
                    amount,
                    note,
                    createdAt: moment().format()
                })
            );
        };
    };

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={description}
                    onChange={onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={onAmountChange}
                />
                {/*<SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />*/}
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={note}
                    onChange={onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>
            </form>
        </div>
    );
};


export default AddExpenseForm;