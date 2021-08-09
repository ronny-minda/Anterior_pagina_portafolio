import React from 'react';


import cerhtml from '../img_certificados/github.jpg';
import cerpreprocesadores from '../img_certificados/preprocesadores.jpg';
import cermobile from '../img_certificados/mobile.jpg';
import cerhtmlcss from '../img_certificados/html-css.jpg';
import cerentorno from '../img_certificados/entorno.jpg';
import flecha from '../img/flecha.svg';

import './sass/proyects.scss';
import './sass/certificate.scss'


class proyects extends React.Component {

  constructor(props) {
    super(props);
    
    

    this.state = {
      proyectoActual: 0,
      carrusel: 'carrusel1 proyecto',
      zoom1: 'zoom',
      zoom2: 'zoom',
      zoom3: 'zoom',
      zoom4: 'zoom',
      zoom5: 'zoom',
    }
  }

  

  Izquierda = () => {
    if (this.state.proyectoActual >= 1) {

      let cont = this.state.proyectoActual - 1;

    
      this.setState({
        proyectoActual: cont,
        carrusel: `carrusel1 proyecto${cont}`,
      });


    }
    
  }

  Derecha = () => {
    if (this.state.proyectoActual <= 3) {



      let cont = this.state.proyectoActual + 1;

    
      this.setState({
        proyectoActual: cont,
        carrusel: `carrusel1 proyecto${cont}`,
      });

    }
    
  }





  CambioOpen1 = (a) => {

    setTimeout(function () {

      this.setState({
        zoom1: 'zoom zoom_none'
      });

      setTimeout(function () {

        this.setState({
          zoom1: 'zoom zoom_none zoom_opa'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }

  CambioClose1 = (a) => {

    setTimeout(function () {

      this.setState({
        zoom1: 'zoom zoom_none'
      });

      setTimeout(function () {

        
        this.setState({
          zoom1: 'zoom'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }


  CambioOpen2 = () => {

    setTimeout(function () {

      this.setState({
        zoom2: 'zoom zoom_none'
      });

      setTimeout(function () {

        this.setState({
          zoom2: 'zoom zoom_none zoom_opa'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }

  CambioClose2 = () => {

    setTimeout(function () {

      this.setState({
        zoom2: 'zoom zoom_none'
      });

      setTimeout(function () {

        
        this.setState({
          zoom2: 'zoom'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }



  CambioOpen3 = () => {

    setTimeout(function () {

      this.setState({
        zoom3: 'zoom zoom_none'
      });

      setTimeout(function () {

        this.setState({
          zoom3: 'zoom zoom_none zoom_opa'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }

  CambioClose3 = () => {

    setTimeout(function () {

      this.setState({
        zoom3: 'zoom zoom_none'
      });

      setTimeout(function () {

        
        this.setState({
          zoom3: 'zoom'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }






  CambioOpen4 = () => {

    setTimeout(function () {

      this.setState({
        zoom4: 'zoom zoom_none'
      });

      setTimeout(function () {

        this.setState({
          zoom4: 'zoom zoom_none zoom_opa'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }

  CambioClose4 = () => {

    setTimeout(function () {

      this.setState({
        zoom4: 'zoom zoom_none'
      });

      setTimeout(function () {

        
        this.setState({
          zoom4: 'zoom'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }




  CambioOpen5 = () => {

    setTimeout(function () {

      this.setState({
        zoom5: 'zoom zoom_none'
      });

      setTimeout(function () {

        this.setState({
          zoom5: 'zoom zoom_none zoom_opa'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }

  CambioClose5 = () => {

    setTimeout(function () {

      this.setState({
        zoom5: 'zoom zoom_none'
      });

      setTimeout(function () {

        
        this.setState({
          zoom5: 'zoom'
        });
        
      }.bind(this), 500)

    }.bind(this), 1)
  }





  render() {
    return (
      
      <section className="proyects certificate">
          <h2>Certificate</h2>
          <p >He aprendido todo estos conocimientos y tambien los e practicado, a continuacion.</p>

          <img className="carrusel_flehaiz" src={flecha} alt="" onClick={this.Izquierda}></img>
          <img className="carrusel_flehadere" src={flecha} alt="" onClick={this.Derecha}></img>

          <div className="carrusel">

            <section className={this.state.carrusel}>

              
              
              <li className="pro">
                <section className="conte_img">
                  <img className="pro1_img" src={cerhtml} onClick={this.CambioOpen1} alt=""></img>
                </section>

                <div className={this.state.zoom1} onClick={this.CambioClose1}>
                  <img className="zoom_img" src={cerhtml} onClick={this.CambioClose1} alt=""></img>
                </div>

              </li> 

              <li className="pro">
                <section className="conte_img">
                  <img className="pro1_img" src={cerpreprocesadores} onClick={this.CambioOpen2} alt=""></img>
                </section>

                <div className={this.state.zoom2} onClick={this.CambioClose2}>
                  <img className="zoom_img" src={cerpreprocesadores} onClick={this.CambioClose2} alt=""></img>
                </div>

              </li> 

              <li className="pro">
                <section className="conte_img">
                  <img className="pro1_img" src={cerhtmlcss} onClick={this.CambioOpen3} alt=""></img>
                </section>
                
                <div className={this.state.zoom3} onClick={this.CambioClose3}>
                  <img className="zoom_img" src={cerhtmlcss} onClick={this.CambioClose3} alt=""></img>
                </div>
                
              </li> 

              <li className="pro">
                <section className="conte_img">
                  <img className="pro1_img" src={cermobile} onClick={this.CambioOpen4} alt=""></img>
                </section>

                <div className={this.state.zoom4} onClick={this.CambioClose4}>
                  <img className="zoom_img" src={cermobile} onClick={this.CambioClose4} alt=""></img>
                </div>

              </li> 

              <li className="pro">
                <section className="conte_img">
                  <img className="pro1_img" src={cerentorno} onClick={this.CambioOpen5} alt=""></img>
                </section>

                <div className={this.state.zoom5} onClick={this.CambioClose5}>
                  <img className="zoom_img" src={cerentorno} onClick={this.CambioClose5} alt=""></img>
                </div>

              </li> 
              
           
            </section>

          </div>
          
          <footer>
            <p>
              <span>© </span> 
              Sitio construido por Ronny Minda 2021
              </p>
          </footer>

      </section>
    )
  }
}

export default proyects;