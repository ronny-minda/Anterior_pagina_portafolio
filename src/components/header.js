import { sign } from 'crypto';
// import React from 'react';
import Typed from 'react-typed';

import { Link } from 'react-router-dom';

import React, {useState} from 'react';


import './sass/header.scss';




class header extends React.Component {


    constructor(props) {
        super(props);
        
        this.state = {

            About: 'ABOUT',
            Projects: 'PROYECTS',
            Contact: 'CONTACT',
            Certificate: 'CERTIFICATE',
            Download: 'CV DOWNLOAD',

            num: 2,
            cambio: 'si',

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
            clasAbout: a1,
            rayaAbout: a2,

            clasProjects: b1,
            rayaProjects: b2,

            clasContact: c1,
            rayaContact: c2,

            clasCertificate: d1,
            rayaCertificate: d2,
        });
    }

    About = () => {
        document.querySelector('main').scrollTo(0,0)
        this.props.about();
        this.cambioFocus('li-About menuact1','raya-About menuact2', 
                         'li-Projects','raya-Projects', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate','raya-Certificate');
    }
    Projects = () => {
        document.querySelector('main').scrollTo(0,450)
        this.props.proyects();
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects menuact1','raya-Projects menuact2', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate','raya-Certificate');
    }
    Contact = () => {
        document.querySelector('main').scrollTo(0,990)
        this.props.contact();
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects','raya-Projects', 
                         'li-Contact menuact1','raya-Contact menuact2', 
                         'li-Certificate','raya-Certificate');
    }
    Certificate = () => {
        document.querySelector('main').scrollTo(0,1450)
        this.props.certificate();
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects','raya-Projects', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate menuact1',
                         'raya-Certificate menuact2');
    }

    
    


  render() {
    return (
            <header className={this.props.navBar} >
                <nav className='header_navbar' onClick={this.props.onClick}>
                    <li className={ this.state.clasAbout } onClick={this.About}>
                        <Link to="#">{ this.state.About }</Link>
                    </li>
                    <div className={ this.state.rayaAbout }></div>

                    <li className={ this.state.clasProjects } onClick={this.Projects}>
                        <Link to="#">{this.state.Projects }</Link>
                    </li>
                    <div className={ this.state.rayaProjects }></div>

                    <li className={ this.state.clasContact} onClick={this.Contact}>
                        <Link to="#">{ this.state.Contact }</Link>
                    </li>
                    <div className={ this.state.rayaContact}></div>

                    <li className={ this.state.clasCertificate } onClick={this.Certificate}>
                        <Link to="#">{ this.state.Certificate }</Link>
                    </li>
                    <div className={ this.state.rayaCertificate}></div>
                    
                    <li className={ this.state.clasDownload }>
                        <a className="curriculum" href="https://raw.githubusercontent.com/ronny-minda/ronny-minda.github.io/master/assets/CurriculumRonnyMinda.pdf" title="Descargar CV" >CV D
                            <Typed
                                strings={[
                                    'OWNLOAD',
                                    'OWNLOAD']}
                                    typeSpeed={80}
                                    backSpeed={100}
                                    loop >
                            </Typed>
                        </a>
                    </li>

                    <div className={ this.state.rayaDownload }></div>


                
            
                
                </nav>
            </header>
    )
  }
}

export default header;