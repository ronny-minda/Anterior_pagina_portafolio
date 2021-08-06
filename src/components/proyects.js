import React from 'react';


import desktop from '../img/des.png';
import flecha from '../img/flecha.svg';

import './sass/proyects.scss';


class proyects extends React.Component {

  constructor(props) {
    super(props);
    
    

    this.state = {
      proyectoActual: 0,
      carrusel: 'carrusel1 proyecto',
    }
  }

  

  Izquierda = () => {
    if (this.state.proyectoActual >= -1) {
      console.log(this.state.proyectoActual, 'siii');

      let cont = this.state.proyectoActual - 1;

    
      this.setState({
        proyectoActual: cont,
        carrusel: `carrusel1 proyecto${cont}`,
      });

      console.log(this.state.carrusel);
    }
    
  }

  Derecha = () => {
    if (this.state.proyectoActual <= 3) {
      console.log(this.state.proyectoActual, 'siii');


      let cont = this.state.proyectoActual + 1;

    
      this.setState({
        proyectoActual: cont,
        carrusel: `carrusel1 proyecto${cont}`,
      });

      console.log(this.state.carrusel);
    }
    
  }

  render() {
    return (
      <section className="proyects">
        <img src="../img/des.png" alt=""></img>
          <h2>Proyectos Personales</h2>
          <p>Estos son algunos de los proyectos que yo e realizado.</p>
          <div className="carrusel">

            <section className={this.state.carrusel}>

              <img className="carrusel_flehaiz" src={flecha} alt="" onClick={this.Izquierda}></img>
              <img className="carrusel_flehadere" src={flecha} alt="" onClick={this.Derecha}></img>
              
              <li className="pro">
                <section className="conte_img">
                  <img className="pro1_img" src={desktop} alt=""></img>
                  <div className="raya_pro"></div>
                  <h2>TECHNOLOGIES</h2>
                  <p>React.js</p>
                  <p>Sass</p>
                  <h2>AVAILABLE</h2>
                  <a href="https://ronny-minda.github.io/" target="_blank">Web Page</a>
                  <a href="https://github.com/ronny-minda" target="_blank">GitHub</a>
                </section>
                <section className="contenido"></section>
              </li> 
              <li className="pro2"></li> 
              <li className="pro3"></li> 
           
            </section>

          </div>
      </section>
    )
  }
}

export default proyects;