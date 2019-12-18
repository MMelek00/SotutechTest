import {
  FETCHING_ORDERS_SUCCESS, FETCHING_ORDERS_FAILURE, IS_LOADING,
} from '../actions/orders';

const initialState = {
  isLoading: true,
  getOrder: false,
  orders: [],
};

const userOrdersData = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        isLoading: false,
        getorders: true,
      };
    case FETCHING_ORDERS_FAILURE:
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default {
  userOrdersData,
};
