import {
  HOST_DATA_REQUEST,
  HOST_DATA_SUCCESS,
  HOST_DATA_FAIL,
} from '../constants/hostConstants';

export const hostDataReducer = (state = { host: {} }, action) => {
  switch (action.type) {
    case HOST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case HOST_DATA_SUCCESS:
      return {
        loading: false,
        host: action.payload,
      };

    case HOST_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
