import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from '../../assets/TitleNationals.jpg';
import strip from '../../assets/IMG_2164.jpg';
import UNLVGUY from '../../assets/IMG_2159.jpg';
import UNLV from '../../assets/IMG_2157.jpg';
import USA from '../../assets/IMG_2154.jpg';

class Brackets extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className="p-5">Fighters Brackets</h1>
          <h1>PLEASE CHECK AGAIN SHORTLY</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Fight</th>
                  <th scope="col">Boxer 1</th>
                  <th scope="col">Versus</th>
                  <th scope="col">Boxer 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>VS.</td>
                  <td>John</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Vincent</td>
                  <td>VS.</td>
                  <td>Jimmy</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Edward</td>
                  <td>VS.</td>
                  <td>Phil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Brackets;
