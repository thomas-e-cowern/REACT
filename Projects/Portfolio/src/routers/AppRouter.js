import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import homePage from '../components/Home';
import portfolioPage from '../components/Portfolio';
import Items from '../components/Items';
import contactPage from '../components/Contact';
import notFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>  
        <div>
            <Header />
                <Switch>
                          
                    <Route path='/' component={ homePage } exact={true} />
                    <Route path='/Items/:id' component={ Items } exact={true}/>
                    <Route path='/portfolioPage' component={ portfolioPage } />
                    <Route path='/contact' component={ contactPage } />
                    <Route component={ notFoundPage } />  
                </Switch>    
        </div>
    </BrowserRouter>
);

export default AppRouter;

