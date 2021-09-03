import React from 'react';


import './sass/loader_screen.scss';

import centro from '../ico/Centro.svg';
import flecja_Derecha from '../ico/flecja_Derecha.svg';
import flecja_izquierda from '../ico/flecja_izquierda.svg';


class loaderScreean extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            raya_iz: 'SVG_IZ',
            raya_centro: 'SVG_CENTRO',
            raya_dere: 'SVG_DERE',
            flecha_iz: 'flecja_izquierda',
            flecha_centro: 'centro',
            flecha_dere: 'flecja_Derecha',
        }

        setTimeout(function () {



            this.setState({
                raya_iz: 'SVG_IZ SVG_IZ_RE',
                raya_centro: 'SVG_CENTRO SVG_CENTRO_RE',
                raya_dere: 'SVG_DERE SVG_DERE_RE',
                flecha_iz: 'flecja_izquierda flecja_izquierda_RE',
                flecha_centro: 'centro centro_RE',
                flecha_dere: 'flecja_Derecha flecja_Derecha_RE',
            });
        }.bind(this), 1)
    }


  render() {


    

    
    return (


        <section className="animacion_intro">

          <img className={ this.state.flecha_iz } src={ flecja_izquierda } alt=""></img>
          <img className={ this.state.flecha_centro } src={ centro } alt=""></img>
          <img className={ this.state.flecha_dere } src={ flecja_Derecha } alt=""></img>
      
      
      
      
            
            <svg
                className={ this.state.raya_iz }
                width="27mm"
                height="22mm"
                viewBox="0 0 27 22"
                version="1.1"
                id="svg26408">
            
                <g>
                <path
                    d="M 22.801709,21.478793 14.437984,12.409241 26.904818,0 11.881446,0.09095052 0.00826823,12.60905 8.3254461,21.491811 Z"
                    id="path869" />
                </g>
            </svg>
        
        
        
        
            <svg
                className={ this.state.raya_centro }
                width="41mm"
                height="22mm"
                viewBox="0 0 41 22"
                version="1.1"
                id="svg26408">
                <g>
                    <path
            
                    d="M 39.984357,0.01169304 35.990567,0.00413411 31.925699,17.017049 31.886427,5.1676432 25.385593,11.652116 18.624186,5.0632568 18.585945,18.500163 15.77772,13.636174 c 2.690304,-1.735778 2.26055,-4.4480633 2.168471,-7.0546637 L 3.8974365,6.4967609 0.00413411,10.39213 H 5.4911376 v 10.814844 h 3.8457599 v -5.614303 l 2.4794355,-0.004 3.268718,5.661585 7.352855,0.01869 0.0124,-6.742741 2.91455,2.891813 2.721279,-2.881478 -0.031,6.734473 h 7.015221 L 40.00996,0.01136881 Z"
                    id="path941"/>
                </g>
            </svg>
        
        
        
            <svg
                className={ this.state.raya_dere }
                width="27mm"
                height="22mm"
                viewBox="0 0 27 22"
                version="1.1"
                id="svg26408">
                <g>
                    <path
                    d="M 14.560352,21.617286 0.00413411,21.609017 12.441618,8.9916994 3.4850587,0.26871745 18.134294,0.00206706 26.797331,8.9296877 Z"
                    id="path982"/>
                </g>
            </svg>
      
      
        </section>
      
    );
  }
}

export default loaderScreean;

