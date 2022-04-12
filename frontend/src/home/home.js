import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import About from './about';
import Header from './header';
import Programs from './programs';




const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Programs />
        </div>
    )
  }
  
  export default Home;