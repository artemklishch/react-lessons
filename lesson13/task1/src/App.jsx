import React from 'react';
import Home from './Home';
import Products from './Products';
import Contacts from './Contacts';
import PageNotFound from './PageNotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
