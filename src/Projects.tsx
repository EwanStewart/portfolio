import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Navbar';
import exp from 'constants';

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
            <div className="container-fluid bg-light p-3">
              <div className="row">
                <div className="col-sm-4">
                    <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Genetic Pong</h5>
                        <p className="card-text">
                          This project explored a genetic approach to creating an infinite Pong game. The graphical display was developed using SFML and the genetic algorithm was implemented in C++, using mutation, crossover and selection principles to evolve generations of Pong paddles.
                        </p>
                        <p>
                        <a href="https://github.com/EwanStewart/Genetic-Pong---CMP304" className="btn btn-primary">View Project</a>
                        </p>
                        <p>
                        <footer>C++</footer>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Weather Indicator</h5>
                        <p className="card-text">
                          A weather indicator which displays the current and future weather conditions through GPIO LEDs. The device is powered by a Raspberry Pi and is hosted on AWS.
                        </p>
                        <p>
                        <a href="https://github.com/EwanStewart/Weather-Indicator" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>Python, AWS, C, RPi</footer>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Explore Dundee</h5>
                        <p className="card-text">
                          This project developed an Android based activity app which allowed users to record their exercises and collate visited locations using the Google Maps API and Geofencing. Users can upload their activity to the public to share their journey.
                        </p>
                        <p>
                        <a href="https://github.com/EwanStewart/Explore-Dundee---CMP309" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>Android, Java</footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                <div className="col-sm-4">
                <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Gamified Programming - Honours Project</h5>
                        <p className="card-text">
                        Honours Project which approached the problem of teaching programming through Gamification techniques in a mobile application environment.
                        </p>
                        <p>
                        <a href="https://github.com/EwanStewart/HonoursProject" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>C#, Unity</footer>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Data Visualisation</h5>
                        <p className="card-text">
                          Data Visualisation project which explored the use of D3.js to create a visualisation of the FIFA World Cup 2022 dataset.
                        </p>
                        <p>
                        <a href="https://mayar.abertay.ac.uk/~1900598/cmp419-data-vis/SourceCode/View/index.html" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>JS, PHP, SQL</footer>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Tapo L530 Smart Bulb Control</h5>
                        <p className="card-text">
                          Wemos circuit to control and toggle smart bulb with a button for toggle and a potentiometer for colour.
                        </p>
                        <p>
                        <a href="https://github.com/EwanStewart/Tapo-L530-Light-Control" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>Wemos, Python, Arduino</footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-4">
                    <div className="card" id='c'>
                        <div className="card-body">
                          <h5 className="card-title">FIFA 23 Web App Automation</h5>
                          <p className="card-text">
                            This project created a Selenium based script which automated the relisting of FIFA 23 items. In combination with Cron on a Raspberry Pi 3b, 24/7 listing is possible.
                          </p>
                          <p>
                          <a href="https://github.com/EwanStewart/FIFA23-AutoRelist-WebApp" className="btn btn-primary">View Project</a>
                          </p>
                          <p>
                          <footer>Python, RPi</footer>
                          </p>
                        </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title">Asset Management</h5>
                        <p className="card-text">
                          Asset Management system using NIST API to highlight vulnerabilities. The system was developed using Python and SQL.
                        </p>
                        <p>
                        <a href="https://github.com/cmp307/Asset-Management---CMP307" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>Python, SQL</footer>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4">
                  <div className="card" id='c'>
                      <div className="card-body">
                        <h5 className="card-title"> The Artefact</h5>
                        <p className="card-text">
                          An adventure game developed as part of a Game Jam. The game was developed using Unreal Engine and was created in 48 hours.
                        </p>
                        <p>
                        <a href="https://ejstewart.itch.io/the-artifact" className="btn btn-primary">View Project</a>
                        </p>
                        <footer>Unreal Engine</footer>
                      </div>
                    </div>
                  
                  </div>
                </div>
            </div>
        </body>
    </html>
  );
}
export default Projects;


              

                  

 
