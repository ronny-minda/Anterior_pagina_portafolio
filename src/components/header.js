import React from 'react';
import Container from './container';
import './sass/navbar.scss';

let About = 'ABOUT';
let Proyects = 'PROYECTS';
let Contact = 'CONTACT';
let Certicate = 'CERTIFICATE';
let Download = 'DOWNLOAD';


class header extends React.Component {

  render() {
    return (
        <div>
            <header className='header'>
                <nav className='header_navbar'>
                    <li>
                        {/* <link href="">{About}</link> */}
                        <a href="">{About}</a>
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