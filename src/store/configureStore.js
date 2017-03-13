import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

/*
import immutableCheckMiddleWare from 'redux-immutable-state-invariant';
/!* ==== NEW CODE ==== *!/
import debounce from 'redux-storage-decorator-debounce';
import filter from 'redux-storage-decorator-filter';
/!* ==== END NEW CODE ==== *!/
*/

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

/* eslint-enable */
const enhancer = composeEnhancers(
  applyMiddleware(thunk, reduxImmutableStateInvariant(), loggerMiddleware)
  // other store enhancers if any
);


export default function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      enhancer
    );
}
