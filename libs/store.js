import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

const enhancers = [];
if (process.browser) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}


const composedEnhancers = compose(
  applyMiddleware(thunkMiddleware),
  ...enhancers
);

export const initStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );
}
