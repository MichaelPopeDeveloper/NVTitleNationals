import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from '../../assets/TitleNationals.jpg';
import strip from '../../assets/IMG_2164.jpg';
import UNLVGUY from '../../assets/IMG_2159.jpg';
import UNLV from '../../assets/IMG_2157.jpg';
import USA from '../../assets/IMG_2154.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ backgroundColor: 'black' }}>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img src={logo} className="App-logo" alt="logo" />
            <a style={{
              fontSize: '200%',
              textAlign: 'center'
            }} type="button" className="btn btn-md p-1 mb-5 mt-5 w-75" href="https://www.eventbrite.com/e/copy-of-title-nationals-boxing-tournament-in-las-vegas-registration-57038053353" target="_blank" >Register Here</a>
            <div>
            </div>
          </div>

          {/* <h1 style={{
            fontSize: '500%',
            textAlign: 'center'
          }} className="text-center p-4 mb-4">
            At <br />
            Thomas & Mack
</h1> */}
        </div>

        <div className="row m-2 p-0">
          <div className="col shadow p-5 text-center d-flex flex-column justify-content-center align-items-center">
            <h3 className="m-5 p-0">Location</h3>
            <h5>Durango Hills Community Center YMCA</h5>
            <p>3521 N Durango Dr, Las Vegas, NV 89129</p>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex flex-column justify-content-start align-items-center">
            {/* <a style={{
              fontSize: '200%',
              textAlign: 'center'
            }} type="button" className="btn btn-light btn-md p-2 mb-5 mt-5 w-75" href="https://www.eventbrite.com/e/copy-of-title-nationals-boxing-tournament-in-las-vegas-registration-57038053353" target="_blank" >Register Here</a> */}
          </div>
        </div>
        <div className="row m-2 text-center d-flex flex-column justify-content-center align-items-center">
          {/* <img src={strip} className="App-logo" alt="logo" /> */}
          <div className="col p-5 shadow">
            <h3 className="mb-5">Get Equipment</h3>
            <p className="p-0 m-0">Visit <a className="text-primary" href="https://www.titleboxing.com/" style={{ fontSize: '110%' }}>Title Boxing</a> for equipment <br /> Hosted by Camp Harder Real Boxing</p>

          </div>
        </div>

        <div className="row pb-0 mb-0">
          <div className="col text-center d-flex justify-content-center align-items-center">
            <h3 className="pb-0 mb-0 pt-5">Sponsered By</h3>
          </div>
        </div>

        <div className="row p-5 pt-1 m-5 mt-0">
          <div className="col-lg-4 p-3 d-flex flex-column justify-content-start align-items-center">
            <img src={UNLVGUY} className="sub-logo" alt="logo" />
          </div>
          <div className="col-lg-4 p-3 d-flex flex-column justify-content-start align-items-center">
            <img src={UNLV} className="sub-logo" alt="logo" />
            <h1>Boxing</h1>
          </div>
          <div className="col-lg-4 p-3 d-flex flex-column justify-content-start align-items-center">
            <img src={USA} className="sub-logo" alt="logo" />
          </div>
        </div>

        <div className="row pb-0 mb-0">
          <div className="col text-center d-flex justify-content-center align-items-center">
            <h3 className="pb-0 mb-0 pt-5">More Info</h3>
          </div>
        </div>

        <div className="row m-2">
          {/* <div className="col-xl shadow text-center p-5 flex-column justify-content-center align-items-start">
            <h5>The hosting hotel: Tuscany Suites & Casino</h5>
            <p>Please note this will only be good until 4/19/19.</p>
            <a href="https://tuscanylv.webhotel.microsdc.us/" style={{width: '80%'}}>tuscanylv.webhotel.microsdc.us</a>
            <p>Group Code: 0419NVTN</p>
          </div> */}
          <div className="col-xl shadow text-center p-5 m-4 flex-column justify-content-center align-items-start">
            <h5>Fighters that need their medicals done before and after this event please contact:</h5>
            <p>Nevada Sports and Spine</p>
            <p>Brandon Snead, MD</p>
          </div>
          {/* <div className="col-xl p-5">
<h5 className="">Specializing in combat sports medicine</h5>
<p>We offer annual physicals for amateur and professional athletes as well as injury treatment, concussion management and concussion clearance. </p>
</div>
<div className="col-xl p-5">
<h5 className="">Two locations to serve you:</h5>
<p>6765 W. Charleston Blvd, Ste 150, Las Vegas, NV 89146</p>
<p>1358 Paseo Verde Pkwy, Suite 200, Henderson, NV 89012</p>
</div> */}
        </div>
        <div className="row bg-light p-5 mt-5">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h3 className="pb-3">Contact</h3>
            <p>Phone: (702) 518-5774</p>
            <p>Fax: (702) 852-0890</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
