import React from 'react';
import Routes from '../../routes';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  body {
  margin: 0;
  font-family:sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: cadetblue;
  }
`;

const App = () => (
  <>
  <GlobalStyle/>
  <Routes/>

  </>
);

export default App;
