import React from 'react'
import tech from './techtitans.png'

import booke from './booke.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import Demoform from './Demoform'
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='navi'>
      <div className='container_fluid'>
        <div className='row'>
          <div className=' col-3  '> <img src={booke} alt="" width={300} height={43} /></div>
          <div className='col-3'>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <a class="nav-link" href="#"> <button class="btn " type="submit"><i class="fa-solid fa-magnifying-glass"> </i></button></a>
            </form>

          </div>



          <div className='log col-3'>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i> </div>
          <div className='col-3' >
            <>
              <Button className='btnn' onClick={handleShow}>
                Sign in<i class="fa-solid fa-user"></i>
              </Button>
<div>
              <Modal  show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className='hd'>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 
                  <Demoform className='login'/>
                </Modal.Body>
                
              </Modal>
              </div>
            </>

          </div>
        </div>

      </div>

      <nav class="navbar shadow-lg navbar-expand-lg bg-body-dark  ">
        <div class="container-fluid">


          <div class="collapse navbar-collapse d-flex justify-content-center " id="navbarSupportedContent">
            <div className='cdn'>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item ">
                  <a className="nav-link"   ><Link to='/' className=' abc'>Home</Link></a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" ><Link to='/arrivel' className=' abc'>Arrival</Link></a>
                </li>

                <li className="nav-item">
                  <a class="nav-link" > <Link to='/feature' className=' abc'> Featured</Link> </a>
                </li>


               
                
                <li class="nav-item ">
                  <a className="nav-link"   ><Link to='/aboutus' className=' abc'>About</Link></a>
                </li>
                
                <li class="nav-item ">
                  <a className="nav-link"   ><Link to='/team' className=' abc'>Team</Link></a>
                </li>
                <li className="nav-item">
                  <a class="nav-link" ><Link to='/info' className=' abc'>Customer Information</Link></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav></div>
  )
}

export default Header

