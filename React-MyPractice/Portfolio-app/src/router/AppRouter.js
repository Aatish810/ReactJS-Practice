import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ContactPage from '../components/ContactPage';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioPage from '../components/Portfolio';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path = '/' component= {HomePage} exact={true}/>
        <Route path = '/portfoliopage' component = {PortfolioPage} exact={true}/>
        <Route path = '/portfolio/:id' component= {PortfolioItem} />
        <Route path = '/contact' component= {ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;