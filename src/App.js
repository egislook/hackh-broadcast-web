import React from 'react';
import { Provider, useSelector } from 'react-redux';
import v4 from 'uuid/v4';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
// import Favicon from 'react-favicon';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

import { routes, redirects } from './utils/routes';
import './App.css';

const Redirects = ({ redirectList }) => redirectList.map((redirect) => (
  <Redirect from={redirect.from.toString()} to={redirect.to.toString()} exact={redirect.exact} key={v4()} />
));
const PrivateRoute = (props) => {
  const { path } = props;

  return useSelector((state) => state.auth.token) ? <Route {...props} />
    : <Redirect from={path} to="/login" />;
};
const App = ({ store }) => {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet>
        <title>{t('app_title')}</title>
      </Helmet>
      <Provider store={store}>
        <Switch>
          {
              routes.map((route, index) => (
                route.private ? <PrivateRoute key={index.toString()} {...route} store={store} />
                  : <Route key={index.toString()} {...route} store={store} />
              ))
            }
          <Redirects redirectList={redirects} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};
export default App;
