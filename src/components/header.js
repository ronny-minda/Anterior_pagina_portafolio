import React from 'react';

import './sass/header.scss';

let About = 'ABOUT';
let Projects = 'PROYECTS';
let Contact = 'CONTACT';
let Certificate = 'CERTIFICATE';
let Download = 'CV DOWNLOAD';


class header extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
          contador: 4,
          clas1: 'btn'
        }
    }

    cambioBtn = (e) => {

        console.log('sii:')
        console.log(e)
        

        /* this.setState({
          contador: this.state.contador + 1,
    
          clas1: this.state.clas1 === 'btn' ? 
          this.state.clas1 = 'btn change' 
          : this.state.clas1 = 'btn'
        }); */
    }

  render() {
    return (
        <div>
            <header className='header'>
                <nav className='header_navbar'>
                    <li className="li-About" name="liabo" onClick={this.cambioBtn}>
                        <a href="#">{About}</a>
                    </li>
                    <div className="raya-About"></div>

                    <li className="li-Projects">
                        <a href="#">{Projects}</a>
                    </li>
                    <div className="raya-Projects"></div>

                    <li className="li-Contact">
                        <a href="#">{Contact}</a>
                    </li>
                    <div className="raya-Contact"></div>

                    <li className="li-Certificate">
                        <a href="#">{Certificate}</a>
                    </li>
                    <div className="raya-Certificate"></div>
                    
                    <li className="li-Download">
                        <a href="#" title={Download}>{Download}</a>
                    </li>
                    <div className="raya-Download"></div>
                </nav>
            </header>
        </div>
    )
  }
}

export default header;