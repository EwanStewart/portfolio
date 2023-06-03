import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';

const Projects = () => {
  const handleClick = () => {
    const parameterValue = 'home';
    const url = `/?data=${parameterValue}`;

    window.location.href = url;
  };

  return (
    <html>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <Navbar/>
        <body>
            a
        </body>
    </html>      
  );
};

export default Projects;