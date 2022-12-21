//import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
//import rootReducer from './reducers'


export default () => {

    //const store = configureStore({ reducer: rootReducer });
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
