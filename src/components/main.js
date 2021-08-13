import React from 'react';

import About from './about';
import Proyects from './proyects';
import Contact from './contact';
import Certificate from './certificate';

import './sass/main.scss'



class main extends React.Component {


  render() {
    return (
      <main className={this.props.main}>
        <About logos={this.props.logos}/>
        <Proyects />
        <Contact />
        <Certificate />
      </main>
    );
  }
}

export default main;