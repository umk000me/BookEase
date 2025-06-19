import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arrivels from './Arrivels';
import Demoform from './Demoform'
import Footer from './Footer';
import About from './About';
import bookease2 from './bookease2.png'
import Info from './Info';
import Featured from './Featured';

import Cartform from './Cartform';
import Tilt from 'react-parallax-tilt';
function App() {
  return (
    <div className='containers'>



      <>

        <BrowserRouter>
        
        <Header /> 
          <div className='booke2 d-flex justify-content-center py-2'>
            <img  src={bookease2} alt="" width={400} height={60}></img>

          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/arrivel' element={<Arrivels />} />
            <Route path='/demoform' element={<Demoform />} />
            <Route path='/aboutus' element={<About />} />
            <Route path='/info' element={<Info />} />
            <Route path='/feature' element={<Featured />} />
           

            <Route path='/cart' element={<Cartform />} />


          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  )
}

export default App