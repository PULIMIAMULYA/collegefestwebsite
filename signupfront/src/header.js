import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Topbar from './topbar';



function Header() {
  return (
<div className='top-bar'>
      <Topbar />
    <div className='main-section'>
        <div className='middle-line'></div>
          <div className='wrapper'>
            <ul className = 'dynamic-txts'>
              <li><span>Welcome to Fest</span></li>
              <li><span>Register Now!</span></li>
              <li><span>PBR-VITS</span></li>
              <li><span>Kavali</span></li>
            </ul>
          </div>
    </div>
</div>
  )
 
}

export default Header;