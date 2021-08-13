import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Background from '../components/background';
import Container from '../components/container';

import html from '../img/html.svg';
import css from '../img/css.svg';
import js from '../img/js.svg';
import sass from '../img/sass.svg';
import ubuntu from '../img/ubuntu.svg';
import github from '../img/git.svg';
import git from '../img/github.svg';
import react from '../img/react.svg';

import html2 from '../img/html2.svg';
import css2 from '../img/css2.svg';
import js2 from '../img/js2.svg';
import sass2 from '../img/sass2.svg';
import ubuntu2 from '../img/ubuntu2.svg';
import github2 from '../img/git2.svg';
import git2 from '../img/github2.svg';
import react2 from '../img/react2.svg';


class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      dark: 'container darka',
      html: html,
      css: css,
      js: js,
      sass: sass,
      ubuntu: ubuntu,
      github: github,
      git: git,
      react: react,
    }
  }

  Prueba = () => {
    console.log('t6ema oscuro');
    if (this.state.dark === 'container darka'){
      this.setState({
        dark: 'container lighta',
        html: html2,
        css: css2,
        js: js2,
        sass: sass2,
        ubuntu: ubuntu2,
        github: github2,
        git: git2,
        react: react2,
      });
    }else{
      this.setState({
        dark: 'container darka',
        html: html,
        css: css,
        js: js,
        sass: sass,
        ubuntu: ubuntu,
        github: github,
        git: git,
        react: react,
      });
    }

    
  }

  render() {
    return (
          <BrowserRouter>
            <Background onClick={this.Prueba}/>
            <Container logos={this.state} dark={this.state.dark} />
          </BrowserRouter>
    )
  }
}

export default App;