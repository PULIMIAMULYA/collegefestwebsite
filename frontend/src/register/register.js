import React, { Component } from 'react';
import '../App.css';
import pic from '../images/student.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
  constructor() {
    super()
    this.state = {
      collegename: '',
      rollno: '',
      email: '',
      categories:{
        cultural:false,
        sports:false,
        technicalevents:false
      }
    }
    this.changecollegename = this.changecollegename.bind(this);
    this.changerollno = this.changerollno.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.handlecheckbox = this.handlecheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changecollegename(event) {
    this.setState({
      collegename: event.target.value
    })
  }
  changerollno(event) {
    this.setState({
      rollno: event.target.value
    })
  }
  changeemail(event) {
    this.setState({
      email: event.target.value
    })
  }
  handlecheckbox = event => {
    let state = this.state;
    state.categories[event.target.value] = event.target.checked;
    this.setState(state);
  }
  handlecheckbox1 = event => {
    let state = this.state;
    state.categories[event.target.value] = false;
    this.setState(state);
  }
  onSubmit(event){
    event.preventDefault()
    const registerd = {
      collegename : this.state.collegename,
      rollno : this.state.rollno,
      email : this.state.email,
      cultural:this.state.categories.cultural,
      sports:this.state.categories.sports,
      technicalevents:this.state.categories.technicalevents
    }
    axios.post("http://localhost:4000/app/signup",registerd)
    .then(response => {
      console.log(response.data);
    })
    window.location = '/'
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <div className='register-body'>
        <div className='register-section shadow p-3 mb-5 bg-body rounded'>
          <div className='fields'>
            <h1 className='display-1'>Register</h1>
            <hr />
            <div className="row mb-3">
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputEmail3" placeholder='College Name' onChange={this.changecollegename} value={this.state.collegename} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputEmail3" placeholder='Roll No' onChange={this.changerollno} value={this.state.rollno} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputEmail3" placeholder='Email' onChange={this.changeemail} value={this.state.email} />
              </div>
            </div>
            <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" value="cultural" onChange={this.handlecheckbox} checked={this.state.categories.cultural}/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Cultural Events
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" value="sports" onChange={this.handlecheckbox} checked={this.state.categories.sports}/>
        <label className="form-check-label" htmlFor="gridCheck1">
            Sports
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" value="technical events" onChange={this.handlecheckbox1} checked={this.state.categories.technicalevents}/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Technical Events
        </label>
      </div>
    </div>
  </div>
          </div>
         <input type="submit" class="btn btn-info mx-4" value="Register" />
          <Link to='/' style={{ textDecoration: 'none' }}><button type="button" class="btn btn-warning">Back to Home</button></Link>
        </div>

        <div className='middle'></div>

        <div className='register-left'> 
         </div>

      </div>

   </form>

    )
  }
}

export default Register;