import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Background from '../components/background';
import Container from '../components/container';


class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      dark: 'container darka',
    }
  }

  Prueba = () => {
    console.log('t6ema oscuro');
    if (this.state.dark === 'container darka'){
      this.setState({
        dark: 'container lighta',
      });
    }else{
      this.setState({
        dark: 'container darka',
      });
    }
    
  }

  render() {
    return (
          <BrowserRouter>
            <Background onClick={this.Prueba}/>
            <Container dark={this.state.dark} />
          </BrowserRouter>
    )
  }
}

export default App;