import React from 'react';
import CV from './CV.pdf';

const Navbar = () => {
  const handleClick = () => {
    const parameterValue = 'projects';
    const url = `/?data=${parameterValue}`;

    window.location.href = url;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <a className="navbar-brand m-2" onClick={handleClick}>Projects</a>
      <a className="navbar-brand m-2" href={CV} target="_blank"> CV</a> 
    </nav>
  );
};

export default Navbar;