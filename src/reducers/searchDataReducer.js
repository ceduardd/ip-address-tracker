import {} from '../constants/hostConstants';
import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAIL,
} from '../constants/searchDataConstants';

export const searchDataReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        loading: true,
      };

    case SEARCH_DATA_SUCCESS:
      return {
        loading: false,
        host: action.payload.host,
        coord: action.payload.coord,
      };

    case SEARCH_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
