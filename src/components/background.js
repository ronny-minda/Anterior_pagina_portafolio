import React from 'react';
import Loader from './loader_screen';
import './sass/background.scss';


import imgSvg2 from '../img/imgSvg2.svg';
import imgSvg3 from '../img/imgSvg3.svg';
import logo from '../img/logo.svg';
import logosol from '../img/solclaro.svg';
import lunaclara from '../img/lunaclaro.svg';

class Background extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      intro: 'loader_screen',
      opacity: 'opacidad',
      none: 'none',
      switch: 'switch',   
    }

    setTimeout(function () {

        console.log('11')

        this.setState({
            intro: 'loader_screen opacidad',
        });
    }.bind(this), 5000)

    setTimeout(function () {
      console.log('11')

      this.setState({
          intro: 'loader_screen opacidad none',
      });
    }.bind(this), 6000)
  }

  CambioBtn = () => {

    let a = this.state.switch;

    if (this.state.switch === 'switch') {
      a = 'switch active'
    }else {
      a = 'switch'
    }

    console.log('oscuro!!')
    this.setState({
      switch: a,
    });
  }

  render() {
    return (
        <section className="background_page">
            {/* <div className="conte_bac">
              <div className="cir_blue"></div>
              <div className="cir_mora"></div>
              <div className="cir_amar"></div>
              <div className="cir_rojo"></div>
            </div> */}

            <div className="boton">
              <button className={this.state.switch} onClick={this.CambioBtn} id="switch">
                <span><img src={logosol} alt=""></img></span>
                <span><img src={lunaclara} alt=""></img></span>
              </button>
            </div>
            
            <a className="logo" href="http://ronny-minda.github.io/">
              <img src={logo} alt=""></img>
            </a>
            
            
            
            <div className="background_img">
              <img className="img1" src={imgSvg2} alt=""></img>
              <img className="img2" src={imgSvg3} alt=""></img>
            </div>

            <div className={this.state.intro}>
              <Loader />
            </div>
        </section>
    );
  }
}

export default Background;

