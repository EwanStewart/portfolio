import React from 'react';
import CV from './CV.pdf';

const Navbar = () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('data') === 'projects') {
    const returnClick = () => {
      const url = `https://ewanstewart.github.io/portfolio/`;
  
      window.location.href = url;
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <a className="navbar-brand m-2" onClick={returnClick}>About Me</a>
        <a className="navbar-brand m-2" href={CV} target="_blank"> CV</a> 
      </nav>
    );
  } else {
    const handleClick = () => {
      const parameterValue = 'projects';
      const url = `https://ewanstewart.github.io/portfolio/?data=${parameterValue}`;
  
      window.location.href = url;
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <a className="navbar-brand m-2" onClick={handleClick}>Projects</a>
        <a className="navbar-brand m-2" href={CV} target="_blank"> CV</a> 
      </nav>
    );
  }
};

export default Navbar;