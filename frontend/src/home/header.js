import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';



function Header() {
  return (
<div className='top-bar'>
<div className='navigator'>
       <div className='clgname'>PBR-VITS</div>
       <Link to='/' style={{textDecoration :'none',color:'white'}}><div className='topcontents'>Home</div></Link>
       <Link to='/register' style={{textDecoration :'none',color:'white'}}><div className='topcontents'>Register</div></Link>
    </div>
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