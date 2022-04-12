import React from 'react';
import '../App.css'; 
import {Link} from 'react-router-dom';

function About () {
  return (
    <div className='about-head'>
        <div class="jumbotron jumbotron-fluid">
  <div class="container shadow p-3 mb-5 bg-body rounded">
    <h2 class='text-center display-6 bg-dark text-light'>VISVOTSHAVAM</h2>      
    <p className='text-center text-dark'>
    Institute of visvodaya society (VTA) invites you to the visvotshavam
A very useful and entertaining program designed to exhibit various cultural events , technical events, sports events, funevents, literature events 
Under the category of cultural events we introduced  the compititions like dance, drama, singing, painting 
And the technical events are coding, debuging, poster presentation, robotics and the sports events are batminton, cricket, chess, volleyball and fun events are photography, short film and the literature events are creative writing, debate, poetry, Essay writing 
It will be going to be a fabulous and remembering function
    </p>
    <div className='container text-center'>
    <Link to='/register' style={{textDecoration :'none'}}><button type="button" class="btn btn-warning">Join With Us by Registering now!!</button></Link>
    </div>
  </div>
  </div>
    </div>
  )
}

export default About;
