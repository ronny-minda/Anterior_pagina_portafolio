import React from 'react';


import desktop from '../img/pagePortafolio.png';
import page_Nutricionista from '../img/page_Nutricionista.png';
import pagefake from '../img/pagefake.png';
import pagekirby from '../img/pagekirby.png';


import flecha from '../img/flecha.svg';

import './sass/proyects.scss';


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

    console.log("%c¡Hola! Déjame saber cómo puedo mejorar enviándome un correo electrónico a: %cronny.michael.minda.vera@gmail.com", "font-size: 18px;", "font-size: 18px; color: lightblue; text-decoration: underline;")


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
      <section className="proyects">
          <h2>Proyectos Personales</h2>
          <p>Estos son algunos de los proyectos que yo e realizado.</p>

          <img className="carrusel_flehaiz" src={flecha} alt="" onClick={this.Izquierda}></img>
          <img className="carrusel_flehadere" src={flecha} alt="" onClick={this.Derecha}></img>

          <div className="carrusel">

            <section className={this.state.carrusel}>

              
              
              <li className="pro">
                <section className="conte_img">

                  <img className="pro1_img" src={desktop} onClick={this.CambioOpen1} alt=""></img>
                  
                  <div className="raya_pro"></div>
                  <h2>TECHNOLOGIES</h2>
                  <p>React.js</p>
                  <p>Sass</p>
                  <h2>AVAILABLE</h2>
                  <a href="https://ronny-minda.github.io/" target="_blank" rel="noopener noreferrer">Web Page</a>
                  <a href="https://github.com/ronny-minda/ronny-minda.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>

                <div className={this.state.zoom1} onClick={this.CambioClose1}>
                  <img className="zoom_img" src={desktop} onClick={this.CambioClose1} alt=""></img>
                </div>
                
                <section className="contenido">
                  <h2>PORTFOLIO</h2>
                  <p>Portafolio o pagina</p>
                  <p>web personales la que</p>
                  <p>expongo mis</p>
                  <p>conocimientos, proyectos</p>
                  <p>personales, CV. En general</p>
                  <p>un presentacion mia</p>
                  <p></p>
                  
                  <p>
                         
                  </p>
                </section>
              </li> 

              <li className="pro">
                <section className="conte_img">

                <img className="pro1_img" src={page_Nutricionista} onClick={this.CambioOpen2} alt=""></img>

                  <div className="raya_pro"></div>
                  <h2>TECHNOLOGIES</h2>
                  <p>Html</p>
                  <p>Css</p>
                  <p>javascript</p>
                  <h2>AVAILABLE</h2>
                  <a href="https://ronny-minda.github.io/Nutricionista/" target="_blank" rel="noopener noreferrer">Web Page</a>
                  <a href="https://github.com/ronny-minda/Nutricionista" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>

                <div className={this.state.zoom2} onClick={this.CambioClose2}>
                  <img className="zoom_img" src={page_Nutricionista} onClick={this.CambioClose2} alt=""></img>
                </div>

                <section className="contenido">
                  <h2>Pagina Nutricionista</h2>
                  <p>Pagina echa</p>
                  <p>para una nutricionista</p>
                  <p>(todo es inventado)</p>
                  <p></p>
                  <p></p>
                  
                  <p>
                         
                  </p>
                </section>
              </li> 

              <li className="pro">
                <section className="conte_img">
                  
                  <img className="pro1_img" src={pagefake} onClick={this.CambioOpen3} alt=""></img>

                  <div className="raya_pro"></div>
                  <h2>TECHNOLOGIES</h2>
                  <p>Html</p>
                  <p>Css</p>
                  <p>javascript(BOM)</p>
                  <h2>AVAILABLE</h2>
                  <a href="https://ronny-minda.github.io/Primer_Portafolio_personal/" target="_blank" rel="noopener noreferrer">Web Page</a>
                  <a href="https://github.com/ronny-minda/Primer_Portafolio_personal" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>

                <div className={this.state.zoom3} onClick={this.CambioClose3}>
                  <img className="zoom_img" src={pagefake} onClick={this.CambioClose3} alt=""></img>
                </div>

                <section className="contenido">
                  <h2>PORTFOLIO</h2>
                  <p>Primer intento de</p>
                  <p>mi portafolio pero me</p>
                  <p>hice otra por tema</p>
                  <p>de gustos personales.</p>
         
                  <p></p>
                  
                  <p>
                         
                  </p>
                </section>
              </li> 

              <li className="pro">
                <section className="conte_img">
                  
                  <img className="pro1_img" src={pagekirby} onClick={this.CambioOpen4} alt=""></img>

                  <div className="raya_pro"></div>
                  <h2>TECHNOLOGIES</h2>
                  <p>Html</p>
                  <p>Css</p>
                  <h2>AVAILABLE</h2>  
                  <a href="https://ronny-minda.github.io/Dibujo-de-kirby/" target="_blank" rel="noopener noreferrer">Web Page</a>
                  <a href="https://github.com/ronny-minda/Dibujo-de-kirby" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>

                <div className={this.state.zoom4} onClick={this.CambioClose4}>
                  <img className="zoom_img" src={pagekirby} onClick={this.CambioClose4} alt=""></img>
                </div>

                <section className="contenido">
                  <h2>DIBUJO</h2>
                  <p>Dibujo echo en la web</p>
                  
                  <p></p>
                  
                  <p>
                         
                  </p>
                </section>
              </li> 

              <li className="pro">
                <section className="conte_img">
                  
                  <img className="pro1_img" src={desktop} onClick={this.CambioOpen5} alt=""></img>

                  <div className="raya_pro"></div>
                  <h2>TECHNOLOGIES</h2>
                  <p>React.js</p>
                  <p>Sass</p>
                  <h2>AVAILABLE</h2>
                  <a href="https://github.com/ronny-minda/Dibujo-de-kirby" target="_blank" rel="noopener noreferrer">Web Page</a>
                  <a href="https://ronny-minda.github.io/Dibujo-de-kirby/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>

                <div className={this.state.zoom5} onClick={this.CambioClose5}>
                  <img className="zoom_img" src={desktop} onClick={this.CambioClose5} alt=""></img>
                </div>

                <section className="contenido">
                  <h2>PORTFOLIO</h2>
                  <p>Portafolio o pagina</p>
                  <p>web personales la que</p>
                  <p>expongo mis</p>
                  <p>conocimientos, proyectos</p>
                  <p>personales, CV. En general</p>
                  <p>un presentacion mia</p>
                  <p></p>
                  
                  <p>
                         
                  </p>
                </section>
              </li> 
              
           
            </section>

          </div>
      </section>
    )
  }
}

export default proyects;