import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import uiReducer from '../reducers/ui';
import dataReducer from '../reducers/data';

export default function configureStore(initialState) {
  const reducers = combineReducers({
    ui: uiReducer,
    data: dataReducer
  });

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
