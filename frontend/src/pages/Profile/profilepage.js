import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './profilepage.css'

export function PersonalProfile() {
  return (
    <div class="container">
      <div class="card m-3 text-light" style={{ width: '50rem' }}>
        <div class="row no-gutters">
          <div class="col-md justify-content-center align-items-center">
            <img src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg' class="card-img rounded-circle m-3" id="avatar" alt="Cat in an avacado" />
            <div class="card-body m-4" id='own'>
              <h3 className="card-title" id='name'>Anmol Agarwal</h3>
              <h4 className='card-subtitle' id='subname'>Disaster Gay</h4>
              <div className='socials'>
                <SocialIcon className='icon' url="https://www.linkedin.com/in/anmol-agrawal25" target="_blank" />
                <SocialIcon className='icon' url="https://github.com/AnmollCodes" target="_blank" bgColor="#FFFFF0" />
              </div>
              <a href='https://anmollcodes.github.io/final-portfolio/' class="btn btn-outline-success">Personal Website</a>
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h5 className="card-text mt-5">Bio</h5>
              <p className="card-text">Aspiring software engineer currently in my sophomore year, upskilling myself and learning continuously. With a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
              <div className='d-flex justify-content-center'>
                <button className='skill'>MongoDB</button>
                <button className='skill'>ExpressJS</button>
                <button className='skill'>ReactJS</button>
                <button className='skill'>NodeJS</button>
              </div>
              <p className="card-text mt-5">Interested in</p>
              <div className='d-flex justify-content-center mt-3'>
                <button className='interests'>Hackathons</button>
                <button className='interests'>Networking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}