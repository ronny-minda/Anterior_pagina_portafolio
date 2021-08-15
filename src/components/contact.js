import React from 'react';



import './sass/contact.scss'


class contact extends React.Component {
  render() {
    return (
      
      <section className="contact">
        <h2>Contact</h2>

        <p>
          Puede comunicarse conmigo en cualquiera de los enlaces a continuación.
        </p>
        <div className="raya_contact"></div>
        <section>

          <span>Email:</span>
          <a href="mailto:ronny.michael.minda.vera@gmail.com" target="_blank" rel="noopener noreferrer">ronny.michael.minda.vera@gmail.com</a>

          <span>telefono:</span>
          <a href="tel:0993105654" target="_blank" rel="noopener noreferrer">0993105654</a>

          <span>GitHub:</span>
          <a href="https://github.com/ronny-minda"  target="_blank" rel="noopener noreferrer">github.com/ronny-minda</a>

          <span>LinkedIn:</span>
          <a href="https://www.linkedin.com/in/ronny-minda-a44261214/"  target="_blank" rel="noopener noreferrer">linkedin.com/in/ronny-minda</a>

          <span>Twitter:</span>
          <a href="https://twitter.com/MichaelMinda7" target="_blank" rel="noopener noreferrer">twitter.com/MichaelMinda7</a>

          <span>Platzi:</span>
          <a href="https://platzi.com/p/RonnyMinda/" target="_blank" rel="noopener noreferrer">platzi.com/@/RonnyMinda</a>

        </section>
        <div className="raya_contact"></div>
      </section>
    )
  }
}

export default contact;