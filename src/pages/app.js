import React from 'react';
import Background from '../components/background';
import Container from '../components/container';


class App extends React.Component {
  render() {
    return (
        <div>
            <Background />
            <Container />
        </div>
    )
  }
}

export default App;