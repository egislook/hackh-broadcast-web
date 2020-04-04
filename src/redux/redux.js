import {
  createStore, compose, applyMiddleware,
} from 'redux';
import throttle from 'lodash.throttle';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './storages/localStorage';

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
    if (process.browser) {
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
  const persistedState = { ...loadState() };

  const store = createStore(
    rootReducer,
    persistedState,
    composedEnhancers,
  );
  store.subscribe(throttle(() => {
    saveState({
      auth: store.getState().auth,
    });
  }, 3000));
  return store;
};
export default configureStore;
