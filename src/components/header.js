import React from 'react';
import btn from './button_mobil';

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
          clasAbout: 'li-About menuact1',
          rayaAbout: 'raya-About menuact2',

          clasProjects: 'li-Projects',
          rayaProjects: 'raya-Projects',

          clasContact: 'li-Contact',
          rayaContact: 'raya-Contact',

          clasCertificate: 'li-Certificate',
          rayaCertificate: 'raya-Certificate',

          clasDownload: 'li-Download',
          rayaDownload: 'raya-Download',
        }
    }

    cambioFocus = (a1,a2, b1,b2, c1,c2, d1, d2) => {

        this.setState({
            clasAbout: this.state.clasAbout = a1,
            rayaAbout: this.state.clasAbout = a2,

            clasProjects: this.state.clasAbout = b1,
            rayaProjects: this.state.clasAbout = b2,

            clasContact: this.state.clasAbout = c1,
            rayaContact: this.state.clasAbout = c2,

            clasCertificate: this.state.clasAbout = d1,
            rayaCertificate: this.state.clasAbout = d2,
        });
    }


    About = () => {
        this.cambioFocus('li-About menuact1','raya-About menuact2', 
                         'li-Projects','raya-Projects', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate','raya-Certificate');
    }
    Projects = () => {
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects menuact1','raya-Projects menuact2', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate','raya-Certificate');
    }
    Contact = () => {
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects','raya-Projects', 
                         'li-Contact menuact1','raya-Contact menuact2', 
                         'li-Certificate','raya-Certificate');
    }
    Certificate = () => {
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects','raya-Projects', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate menuact1',
                         'raya-Certificate menuact2');
    }

    
    


  render() {
    return (
        <div>
            <header className={this.props.navBar}>
                <nav className='header_navbar' onClick={this.props.onClick}>
                    <li className={ this.state.clasAbout } onClick={this.About}>
                        <a href="#">{About}</a>
                    </li>
                    <div className={ this.state.rayaAbout }></div>

                    <li className={ this.state.clasProjects } onClick={this.Projects}>
                        <a href="#">{Projects}</a>
                    </li>
                    <div className={ this.state.rayaProjects }></div>

                    <li className={ this.state.clasContact} onClick={this.Contact}>
                        <a href="#">{Contact}</a>
                    </li>
                    <div className={ this.state.rayaContact}></div>

                    <li className={ this.state.clasCertificate } onClick={this.Certificate}>
                        <a href="#">{Certificate}</a>
                    </li>
                    <div className={ this.state.rayaCertificate}></div>
                    
                    <li className={ this.state.clasDownload }>
                        <a href="#" title={Download}>{Download}</a>
                    </li>
                    <div className={ this.state.rayaDownload }></div>
                </nav>
            </header>
        </div>
    )
  }
}

export default header;