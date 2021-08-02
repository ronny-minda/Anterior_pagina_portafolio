import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Background from '../components/background';
import Container from '../components/container';


class App extends React.Component {
  render() {
    return (
          <BrowserRouter>
            <Background />
            <Container />
          </BrowserRouter>
    )
  }
}

export default App;