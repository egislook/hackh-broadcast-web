import {
  createStore, compose, applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchConfirmedCases } from './actions/totalConfirmed';
import { fetchDeathCases } from './actions/totalDeaths';
import { fetchRecoveredCases } from './actions/totalRecovered';

const configureStore = () => {
  const logger = createLogger({
  });

  const enhancers = [];
  let middlewares;


  if (process.env.NODE_ENV === 'development') {
    middlewares = [
      thunk,
      logger,
    ];
    if (process.browser ) {
      const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
      if (typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
        enhancers.push(__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
      }
    }
  } else {
    middlewares = [
      thunk,
    ];
  }


  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
  );
  const store = createStore(
    rootReducer,
    composedEnhancers,
  );
  store.dispatch(fetchConfirmedCases())
  store.dispatch(fetchDeathCases())
  store.dispatch(fetchRecoveredCases())
  return store;
};
export default configureStore;
