import React from 'react';
import './sass/container.scss';

import Header from './header';
import Btn from './button_mobil';



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

    

    this.state.navBar = !this.state.navBar;
    

    this.setState({
      clas1: this.state.clas1 === 'btn' ? 
      this.state.clas1 = 'btn change' 
      : this.state.clas1 = 'btn',
      
      navBarClas: this.state.navBar === true ? 
      this.state.navBarClas = 'header'
      : this.state.navBarClas = 'header navBar'
    });
    
  }

  render() {
    return (
        <div>
            <div className='container'>
                <div className='container_div'>
                  <Btn clas1={this.state.clas1} onClick={this.Prueba}/>
                  <Header navBar = {this.state.navBarClas} onClick={this.Prueba}/>
                </div>
            </div>
        </div>
    );
  }
}

export default Container;