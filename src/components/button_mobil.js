import React from 'react';

import './sass/button_mobil.scss';



class button extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      
    }
  }

/*   cambioBtn = (e) => {

    console.log(this.props.activo = true);

    this.setState({
      clas1: this.state.clas1 === 'btn' ? 
      this.state.clas1 = 'btn change' 
      : this.state.clas1 = 'btn'
    });
  } */

  

  render() {
    
    return (
      <div>
        <div className={this.props.clas1} onClick={this.props.onClick} >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    )
  }
}

export default button;