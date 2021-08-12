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
      navBar: false,
      main: 'main_about'
    }
  }

  Prueba = () => {
    let clase1 ;
    let clase2 ;
    let booleano;
    

    booleano = !this.state.navBar;

    
    
    this.state.clas1 === 'btn' ? clase1 = 'btn change' : clase1 = 'btn'
    this.state.navBar === true ? clase2 = 'header' : clase2 = 'header navBar'

    this.setState({
      clas1: clase1,
      navBarClas: clase2,
      navBar: booleano,
    });
    
  }

  about = () => {
    this.setState({
      main: 'main_about',
    });

  }
  proyects = () => {
    this.setState({
      main: 'main_proyects',
    });

  }
  contact = () => {
    this.setState({
      main: 'main_contact',
    });

  }
  certificate = () => {


    
    let certificate = 'main_certificate'
    this.setState({
      main: certificate,
    });

  }

  render() {
    return (
      <section id="halo" className={this.props.dark}>
        <div className='container_div'>
            <Btn clas1={this.state.clas1} onClick={this.Prueba}/>
            <Header 
            navBar = {this.state.navBarClas} 
            onClick={this.Prueba} 
            about={this.about} 
            proyects={this.proyects} 
            contact={this.contact} 
            certificate={this.certificate} />
            <Main main={this.state.main}/>
        </div>
      </section>
    );
  }
}

export default Container;