import React from 'react';

import './sass/header.scss';

let About = 'ABOUT';
let Proyects = 'PROYECTS';
let Contact = 'CONTACT';
let Certicate = 'CERTIFICATE';
let Download = 'CV DOWN...';


class header extends React.Component {

    

  render() {
    return (
        <div>
            <header className='header'>
                <nav className='header_navbar'>
                    <li>
                        <a href="#">{About}</a>
                    </li>
                    <li>
                        <a href="">{Proyects}</a>
                    </li>
                    <li>
                        <a href="">{Contact}</a>
                    </li>
                    <li>
                        <a href="">{Certicate}</a>
                    </li>
                    <li>
                        <a href="">{Download}</a>
                    </li>
                </nav>
            </header>
        </div>
    )
  }
}

export default header;