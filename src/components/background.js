import React from 'react';
import './sass/background.scss';

class Background extends React.Component {
  render() {
    return (
        <div>
            <div className="conte_bac">
                <div className="cir_blue"></div>
                <div className="cir_mora"></div>
                <div className="cir_amar"></div>
                <div className="cir_rojo"></div>
            </div>
        </div>
    );
  }
}

export default Background;

