import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';

import profile from './images/profile.jpg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';


const Portfolio: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('data');
  var result = dataParam === "projects" ? 0 : 1;
  if (result == 1) {
    return (
      <html>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <Navbar/>
          <div className="container-fluid bg-light">
          <body>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="nameTitle">Ewan Stewart</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <img src={profile} className="profilePic" alt="Profile Picture" />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">About Me</h5>
                      <p className="card-text">
                        A recent Computing graduate from the University of Abertay with a 2:1 BSc Hons Degree, I am passionate about software development and developing a great user experience through effective solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <a href="https://www.linkedin.com/in/ewan-stewart-4905b0266/"><img src={linkedin} className="socialLinks" alt="LinkedIn"/></a>
                </div>
                <div className="col-sm-6">
                  <a href="https://github.com/EwanStewart"><img src={github} className="socialLinks" alt="GitHub"/></a>
                </div>            
              </div>
            </div>
          </body>
        </div>

        <footer className="footer bg-dark text-center fixed-bottom">
          <div className="container">
            <span className="text-light">Developed By Ewan Stewart (2023)</span>
          </div>
        </footer>
      </html>      
    );
  } else {
    return <Projects/>
  }
}

export default Portfolio;
