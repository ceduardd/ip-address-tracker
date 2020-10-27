import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';
import MapView from '../components/MapView';

import { GlobalProvider } from '../context/GlobalState';
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
    <>
      <GlobalProvider>
        <GlobalStyle />
        <ToastContainer />
        <Header />
        <MapView />
      </GlobalProvider>
    </>
  );
};

export default App;
