import React from 'react'
import './App.css';
import {Link} from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='navigator'>
       <div className='clgname'>PBR-VITS</div>
       <Link to='/' style={{textDecoration :'none',color:'white'}}><div className='topcontents'>Home</div></Link>
       <Link to='/register' style={{textDecoration :'none',color:'white'}}><div className='topcontents'>Register</div></Link>
    </div>
  )
}

export default Topbar;