import React from 'react';
import Typed from 'react-typed';

// import css from '../img/css.svg';
// import js from '../img/js.svg';
// import sass from '../img/sass.svg';
// import ubuntu from '../img/ubuntu.svg';
// import github from '../img/git.svg';
// import git from '../img/github.svg';



import './sass/about.scss'


class about extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        loader: 'logo-inicio',            
    }


    if(this.props.dark === 'container lighta') {

    }else {

    }
  }

  render() {
    return (
      <section className="about">
        <h1>Ronny Minda Vera</h1>
        <h3>Desarrollado
          <Typed
              strings={[
                  'r Front End',
                  'r WEB']}
                  typeSpeed={100}
                  backSpeed={50}
                  loop >
          </Typed>
        </h3>

        <p>¡Hola! Soy Ronny Michael, comencé mi carrera en el ITB como desarrollo Software</p>
        <p>y actualmente me estoy reinventando como desarrollador front end de manera </p>
        <p>autodidacta, y crear cosas con las que podamos interactuar, soy un aprendiz</p>
        <p>continuo para mi aprender equivale a explorar nuevas ideas y crecer como</p>
        <p> individuo.</p>  
        <br></br>
        <p>También disfruto de los juegos, la gimnasia y el levantamiento de pesas.</p>
        <div className="main_raya"></div>
        <section className="section">

          <img className="html" src={this.props.logos.html} alt="html"></img>
          <span>HTML</span>

          <img className="css" src={this.props.logos.css} alt="css"></img>
          <span>CSS</span>

          <img className="js" src={this.props.logos.js} alt=""></img>
          <span>JAVASCRPT</span>

          <img className="react" src={this.props.logos.react} alt="react"></img>
          <span>REACT</span>

          <img className="sass" src={this.props.logos.sass} alt=""></img>
          <span>SASS</span>

          <img className="ubuntu" src={this.props.logos.ubuntu} alt=""></img>
          <span>UBUNTU</span>

          <img className="git" src={this.props.logos.git} alt="git"></img>
          <span>GIT</span>

          <img className="github" src={this.props.logos.github} alt="github"></img>
          <span>GITHUB</span>
          
          
          
        </section>
        <div className="main_raya"></div>

        <p>Tambien tengo conocimientos en <b>JAVA</b> y <b>C++</b> ya que estos son los lenguajes que aprendi</p>
        <p> en el ITB desde algo tan basico como if else hasta programacion orientada a objetos</p>
        <p>como abstraccion, polimorfismo etc.</p>
      </section>
    )
  }
}

export default about;