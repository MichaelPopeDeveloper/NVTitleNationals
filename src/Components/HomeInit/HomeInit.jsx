import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeInit extends Component {
  render() {
    return (
      <div className="row">
      <div className="col p-5 d-flex flex-column justify-content-center align-items-center">
      <h1>NOTICE</h1>
      <p>The venue for the Title Nationals April 26-28th has been changed:</p>
      <p>Correct information has been made on the registration Link and Forms.</p>
<Link className="btn btn-md btn-primary p-1 mb-5 mt-5 w-75"
to="/home">Home</Link>
<Link className="btn btn-md btn-primary p-1 mb-5 mt-0 w-75"
to="/brackets">Fighters Brackets</Link>
      {/* <a style={{
              fontSize: '200%',
              textAlign: 'center'
            }} type="button" className="btn btn-md p-1 mb-5 mt-5 w-75" href="https://www.eventbrite.com/e/copy-of-title-nationals-boxing-tournament-in-las-vegas-registration-57038053353" target="_blank" >Home</a> */}
      </div>
      </div>
    );
  }
}

export default HomeInit;
