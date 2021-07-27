import React from 'react';
import './sass/container.scss';

import Header from './header'

class Container extends React.Component {
  render() {
    return (
        <div>
            <div className='container'>
                <div className='container_div'>
                  <Header />
                </div>
            </div>
        </div>
    );
  }
}

export default Container;