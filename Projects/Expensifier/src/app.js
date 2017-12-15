import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters';
import getVisableExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4550 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));
//store.dispatch(setTextFilter('water'));

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses, state.filters);
console.log(visableExpenses);

console.log(store.getState());

const jsx = (
    <Provider store={ store }>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));