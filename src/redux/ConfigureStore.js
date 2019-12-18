
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import userOrdersData from './reducers/orders';

// Middleware
const middleware = () => {
  return applyMiddleware(reduxThunk)
};
export default createStore(
  combineReducers({
    ...userOrdersData
  }),
  middleware()
)