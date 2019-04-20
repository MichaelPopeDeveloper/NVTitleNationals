import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-white w-100">
              <a className="navbar-brand" href="#">NV Title Nationals</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                  <Link to="/">
                  <a className="nav-link" href="#">Landing Page<span class="sr-only">(current)</span></a>
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/home">
                  <a className="nav-link" href="#">Home</a>
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/brackets">
                  <a className="nav-link" href="#">Fighters Brackets</a>
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
