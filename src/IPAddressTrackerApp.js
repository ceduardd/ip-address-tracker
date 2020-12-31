import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens/HomeScreen';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
    display: flex;
    flex-direction: column;
  }

  .leaflet-container {
    height: 100vh;
    width: 100%;
    z-index: -1 !important;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <HomeScreen />
      <ToastContainer />
    </Provider>
  );
};

export default App;
