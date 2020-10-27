import React, { createContext, useReducer } from 'react';

// Payload model
const initialState = {
  ip: '',
  data: {
    ip: '',
    location: '',
    timezone: '',
    isp: '',
    coord: {
      lat: '',
      lng: '',
    },
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadData = newData => {
    dispatch({
      type: 'LOAD_DATA',
      payload: newData,
    });
  };

  return (
    <GlobalContext.Provider value={{ data: state.data, loadData }}>
      {children}
    </GlobalContext.Provider>
  );
};
