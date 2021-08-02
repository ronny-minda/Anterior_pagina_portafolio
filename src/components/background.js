import React from 'react';
import './sass/background.scss';
import imgSvg2 from '../img/imgSvg2.svg';
import imgSvg3 from '../img/imgSvg3.svg';

class Background extends React.Component {
  render() {
    return (
        <section className="background_page">
            <div className="conte_bac">
              <div className="cir_blue"></div>
              <div className="cir_mora"></div>
              <div className="cir_amar"></div>
              <div className="cir_rojo"></div>
            </div>
            <div className="background_img">
              <img className="img1" src={imgSvg2} alt=""></img>
              <img className="img2" src={imgSvg3} alt=""></img>
            </div>
        </section>
    );
  }
}

export default Background;

