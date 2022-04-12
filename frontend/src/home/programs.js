import React from 'react';
import '../App.css';


import chess from '../images/chess.jpg';
import cricket from '../images/cricket.jpg';
import poetry from '../images/poetry.jpg';
import sing from '../images/singing.jpg';
import volleyball from '../images/volleyball.jpg';
import write from '../images/writing.jpg';
import camera from '../images/camera.jpg';
import paint from '../images/painting.jpg';

function Programs() {
  return (
    <div className='prgms'>
      <div className='prgm-contents'>
        <div className="card w-60 bg-dark text-white">
          <div className="card-body">
            <div className="jumbotron jumbotron-fluid">
              <h1>Categories</h1>
            </div>
            <div className='container'>
              <div id="accordion" >
                <div className="card bg bg-secondary">
                  <div className="card-header">
                    <a className='card-link text-light' data-toggle="collapse" href="#collapseOne">
                      Cultural Events
                    </a>
                  </div>
                  <div id="collapseOne" className="collapse show" data-parent="#accordion">
                    <div className="card-body">
                      <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Dance</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Drama</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Singing</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Painting</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg bg-secondary">
                  <div className="card-header">
                    <a className="collapsed card-link text-light" data-toggle="collapse" href="#collapseTwo">
                      Sports
                    </a>
                  </div>
                  <div id="collapseTwo" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                      <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Chess</a>

                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">cricket</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Volleyball</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg bg-secondary">
                  <div className="card-header">
                    <a className="collapsed card-link text-light" data-toggle="collapse" href="#collapseThree">
                      Technical Events
                    </a>
                  </div>
                  <div id="collapseThree" className="collapse" data-parent="#accordion">
                    <div className="card-body">
                      <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Ppt Presentation</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Poster</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-light">Paper Presentation</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   <div className='images'>
        <div id="carouselExampleCaptions" className="carousel slide shadow p-3 mb-5 bg-body rounded" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={sing} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h4 className='text-light'>Dancing - Singing</h4>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={camera} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h4 className='text-dark'>Photography</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={write} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h4 className='text-dark'>Poetry</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={chess} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h4 className='text-dark'>Chess </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={cricket} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h4 className='text-dark'>cricket</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={volleyball} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h4 className='text-light'>volleyball</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src={paint} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h4 className='text-dark'>Painting</h4>
              </div>
            </div>
          </div>

         
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> 
    </div> 

  )
}

export default Programs;

