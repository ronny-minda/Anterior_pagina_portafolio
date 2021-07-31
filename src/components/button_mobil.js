import React from 'react';

import './sass/button_mobil.scss';



class button extends React.Component {

  constructor(props) {
    super(props);
    

    

    this.state = {
      contador: 4,
      clas1: 'btn'
    }
  }

  cambioBtn = () => {

    this.setState({
      contador: this.state.contador + 1,

      clas1: this.state.clas1 === 'btn' ? 
      this.state.clas1 = 'btn change' 
      : this.state.clas1 = 'btn'
    });
  }

  

  render() {
    
    return (
      <div>
        <div className={this.state.clas1} onClick={this.cambioBtn} >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <h1>{this.state.contador}</h1>
      </div>
    )
  }
}

export default button;