import React from 'react'
import tech from './techtitans.png'
import booke from './booke.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Demoform from './Demoform';
import './App.css';  

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='navi'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6 col-md-3'>
            <img src={booke} alt="Logo" className='img-fluid' />
          </div>
          <div className='col-12 col-md-6'>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
          <div className='col-6 col-md-3 text-end'>
            <i className="fa-solid fa-heart me-3"></i>
            <i className="fa-solid fa-cart-shopping me-3"></i>
            <Button className='btnn' onClick={handleShow}>
              Sign in <i className="fa-solid fa-user"></i>
            </Button>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg mt-3">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/arrivel' className='nav-link'>Arrival</Link>
              </li>
              <li className="nav-item">
                <Link to='/feature' className='nav-link'>Featured</Link>
              </li>
              <li className="nav-item">
                <Link to='/aboutus' className='nav-link'>About</Link>
              </li>
              <li className="nav-item">
                <Link to='/team' className='nav-link'>Team</Link>
              </li>
              <li className="nav-item">
                <Link to='/info' className='nav-link'>Customer Information</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='hd'>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Demoform className='login' />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Header;
