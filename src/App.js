import React from 'react';
import { Provider } from 'react-redux';
import v4 from 'uuid/v4';
// import Favicon from 'react-favicon';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import { routes, redirects } from './utils/routes';
import './App.css';

const Redirects = ({ redirectList }) => redirectList.map((redirect) => (
  <Redirect from={redirect.from.toString()} to={redirect.to.toString()} exact={redirect.exact} key={v4()} />
));

const App = ({ store }) => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {
          routes.map((route, index) => (
            <Route key={index.toString()} {...route} store={store} />
          ))
        }
        <Redirects redirectList={redirects} />
      </Switch>
    </Provider>
  </BrowserRouter>
);
export default App;
