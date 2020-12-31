import {
  COORD_DATA_REQUEST,
  COORD_DATA_SUCCESS,
  COORD_DATA_FAIL,
} from '../constants/coordConstants';

export const coordDataReducer = (state = { coord: {} }, action) => {
  switch (action.type) {
    case COORD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case COORD_DATA_SUCCESS:
      return {
        loading: false,
        coord: action.payload,
      };

    case COORD_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
