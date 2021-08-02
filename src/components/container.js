import React from 'react';
import './sass/container.scss';

import Header from './header';
import Btn from './button_mobil';
import Main from './main';



class Container extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      clas1: 'btn',
      navBarClas: 'header',
      navBar: true,
    }
  }

  Prueba = () => {
    let clase1;
    let clase2;
    let booleano = true;
    

    booleano = !booleano;

    
    
    this.state.clas1 === 'btn' ? clase1 = 'btn change' : clase1 = 'btn'
    this.state.navBar === true ? clase2 = 'header' : clase2 = 'header navBar'

    this.setState({
      clas1: clase1,
      navBarClas: clase2,
      navBar: booleano,
    });
    
  }

  render() {
    return (
      <section className='container'>
        <div className='container_div'>
            <Btn clas1={this.state.clas1} onClick={this.Prueba}/>
            <Header navBar = {this.state.navBarClas} onClick={this.Prueba}/>
            <Main />
        </div>
      </section>
    );
  }
}

export default Container;