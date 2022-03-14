import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="#">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{props.secondTitle}</Link>
              {/* <a className="nav-link" href="#">{props.secondTitle}</a> */}
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Most Popular
              </Link>
              {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Most Popular
              </a> */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Global</Link></li>
                <li><Link className="dropdown-item" to="/">Business</Link></li>
                <li><Link className="dropdown-item" to="/">Technology</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/about">Sports</Link></li>
                {/* <li><a className="dropdown-item" href="#">Global</a></li>
                <li><a className="dropdown-item" href="#">Business</a></li>
                <li><a className="dropdown-item" href="#">Technology</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sports</a></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Climate Change</Link>
              {/* <a className="nav-link" href="#">About Climate Change</a> */}
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success mx-1" type="submit">Search</button>
          </form>
          <div className="d-flex">
            <button className="bg-primary rounded mx-2" onClick={changeFunc} style={{height:'25px',width:'25px'}}></button>
            <button className="btn btn-success rounded mx-2" onClick={changeFunc} style={{height:'25px',width:'25px'}}></button>
            <button className="btn btn-danger rounded mx-2" onClick={changeFunc} style={{height:'25px',width:'25px'}}></button>
            <button className="btn btn-secondary rounded mx-2" onClick={changeFunc} style={{height:'25px',width:'25px'}}></button>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switchbtn" onClick={props.switchMode}/>
            <label className={`form-check-label text-${props.mode ==='light' ? 'dark':'light'}`} htmlFor="switchbtn">{props.mode === 'light' ? 'Enable' : 'Disable'} DarkMode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    secondTitle : PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title : "Blog",
    secondTitle : "Live"
}
