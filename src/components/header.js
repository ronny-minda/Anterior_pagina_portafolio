import React from 'react';
import { Link } from 'react-router-dom';


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
        this.props.about();
        this.cambioFocus('li-About menuact1','raya-About menuact2', 
                         'li-Projects','raya-Projects', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate','raya-Certificate');
    }
    Projects = () => {
        this.props.proyects();
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects menuact1','raya-Projects menuact2', 
                         'li-Contact','raya-Contact', 
                         'li-Certificate','raya-Certificate');
    }
    Contact = () => {
        this.props.contact();
        this.cambioFocus('li-About','raya-About', 
                         'li-Projects','raya-Projects', 
                         'li-Contact menuact1','raya-Contact menuact2', 
                         'li-Certificate','raya-Certificate');
    }
    Certificate = () => {
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
                        <a className="curriculum" href="https://raw.githubusercontent.com/ronny-minda/ronny-minda.github.io/master/assets/Curriculum%20Ronny%20Minda.pdf" title="Descargar CV" > { this.state.Download } </a>
                    </li>
                    <div className={ this.state.rayaDownload }></div>
                </nav>
            </header>
    )
  }
}

export default header;