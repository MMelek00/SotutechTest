import AsyncStorage from '@react-native-community/async-storage';

export const FETCHING_ORDERS_SUCCESS = 'FETCHING_ORDERS_SUCCESS';
export const FETCHING_ORDERS_FAILURE = 'FETCHING_ORDERS_FAILURE';
export const IS_LOADING = 'IS_LOADING';

export function getOrdersSuccess(orders) {
  return {
    type: FETCHING_ORDERS_SUCCESS,
    orders,
  };
}

export function getOrdersFailure() {
  return {
    type: FETCHING_ORDERS_FAILURE,
  };
}

export function loading() {
  return {
    type: IS_LOADING,
  };
}

  export function fetchOrders(id) {
    return (dispatch) => {
      try {
      AsyncStorage.getItem('USER_ORDERS_INFO', (err, result) => {
        dispatch(loading());
        if (result) {
            let orders = JSON.parse(result);
            dispatch(getOrdersSuccess(orders));
            console.log('USER_ORDERS_INFO',orders)
        }
        else {
          dispatch(getOrdersFailure());
          console.log('USER_ORDERS_INFO','failure')
        };
    })
  } catch (error) {
    dispatch(getOrdersFailure());
    console.log('USER_ORDERS_INFO','failure')
  }
    }
}
