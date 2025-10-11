import React from 'react'


import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

// 🔥 Added for theme palette
const colors = [
  { background: '#fce4ec', text: '#880e4f' },
  { background: '#e8f5e9', text: '#1b5e20' },
  { background: '#e3f2fd', text: '#0d47a1' },
  { background: '#fff3e0', text: '#e65100' },
  { background: '#f5f5f5', text: '#212121' }
];





export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.title}</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/about">{props.aboutText}</Link>

        </li>
          </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable dark mode</label>
</div>
     {/* 🔥 Added for theme palette */}
          <div style={{ display: 'flex', gap: '8px', marginLeft: '15px' }}>
            {colors.map((color, index) => (
              <div
                key={index}
                onClick={() => props.onThemeChange(color)}
                style={{
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  backgroundColor: color.background,
                  border: '2px solid white',
                  cursor: 'pointer'
                }}
              ></div>
            ))}
          </div>

    </div>
  </div>
</nav>
  )
}

Navbar.prototype = {
    title: propTypes.string.isRequired,
     aboutText: propTypes.string.isRequired
    };
// Navbar.defaultProps = {
//   title: 'set the title',
//   aboutText: 'AboutMe'
// };

