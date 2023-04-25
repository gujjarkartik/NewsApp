import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    let {handletheme}=this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          
  <div className="container-fluid">
  <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catgeory
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/business">business</a></li>
            <li><a className="dropdown-item" href="/sports">sports</a></li>
            <li><a className="dropdown-item" href="/entertainment">entertainment</a></li>
            <li><a className="dropdown-item" href="/science">science</a></li>
            <li><a className="dropdown-item" href="/technology">technology</a></li>
            <li><a className="dropdown-item" href="/health">health</a></li>
          </ul>
        </div>
    <a className="navbar-brand" href="/"><h1>Latest News</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    { /** 
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        **/
    }
        
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" onClick={handletheme} id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </div>
  
</nav>
</div>
    )
  }
}
