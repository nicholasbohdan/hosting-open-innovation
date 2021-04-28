import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ManageUserReducer from './reducer/ManageUserReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


const reducer = combineReducers({
  ManageUserReducer,
});

const configureStore = initialState => createStoreWithMiddleware(
  reducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default configureStore;
