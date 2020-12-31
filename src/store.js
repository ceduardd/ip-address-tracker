import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { coordDataReducer } from './reducers/coordDataReducer';
import { hostDataReducer } from './reducers/hostDataReducer';
import { searchDataReducer } from './reducers/searchDataReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const hostDataFromStorage = localStorage.getItem('hostData')
  ? { host: JSON.parse(localStorage.getItem('hostData')), loading: false }
  : { loading: true };

const coordDataFromStorage = localStorage.getItem('coordData')
  ? { coord: JSON.parse(localStorage.getItem('coordData')), loading: false }
  : { loading: true };

const reducers = combineReducers({
  hostData: hostDataReducer,
  coordData: coordDataReducer,
  searchData: searchDataReducer,
});

const initialState = {
  hostData: hostDataFromStorage,
  coordData: coordDataFromStorage,
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
