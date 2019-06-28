import React, { Component } from 'react';
import './App.css';
import './App.scss';
import {logo} from './images/logo.png';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class Gdadmin extends Component {
  
  render() { 
    return (
          <div className="bodyWrapper">
          <div className="header-wrapper">
            <img src={require('./images/logo2.png')} alt='logo' />            
            <h1>Issue Tracker  Admin Dashboard</h1>
            <div className="profile-info-section">
            <img className="image-circular" src={require('./images/avater.jpg')} alt='logo' /> 
            <p><i class="arrow down"></i></p>
            </div>

              {/* <a href="Team-members">My Team</a>
              <a href="Company-Profile">Company Profile</a> */}
              <hr></hr>
                <ul>
                  <li>
                    <a href="Pending-Tickets">Pending Tickets</a>
                    <a href="Assigned-Tickets">Assigned Tickets</a>
                    <a href="Resolved-Tickets">Resolved Tickets</a>
                    <a href="Projects">Projects</a>
                    <a href="Jobs">Jobs Openiongs</a>                   
                  </li>
                </ul>
          <div className="top-wrapper"></div>
          <footer></footer>
          </div>

        </div>
      
          );
            }
              }

export default Gdadmin;

