import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const expenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default expenseDashboardPage;