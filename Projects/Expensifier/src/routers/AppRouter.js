import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import addExpensePage from '../components/AddExpense';
import expenseDashboardPage from '../components/DashBoard';
import editExpensePage from '../components/EditExpense';
import helpPage from '../components/Help';
import notFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>  
        <div>
            <Header />
                <Switch>
                    <Route path='/' component={ expenseDashboardPage } exact={true}/>
                    <Route path='/create' component={ addExpensePage } />
                    <Route path='/edit/:id' component={ editExpensePage } />
                    <Route path='/help' component={ helpPage } />
                    <Route component={ notFoundPage } />
                </Switch>    
        </div>
    </BrowserRouter>
);

export default AppRouter;

