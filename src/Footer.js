import React from 'react';
import './App.css'; // Import the CSS file

function Footer() {
  return (
    <div className='container2 shadow-lg border border-2 rounded-4'>
        <div className='row'>
            <div className='col-3'>
              <h3>Company</h3>
                <p>Career</p>
                <p>About us</p>
                <p>Contact us</p>
                <p>Team</p>
            </div>
            <div className='col-3'>
                <h3>Policies</h3>
              <p>Privacy Policies</p>
              <p>Terms of Use</p>
              <p>Secure Shopping</p>
              <p>Copyright Policy</p>                  
            </div>
           <div className='col-3'>
            <h3>Contact us:</h3>
            <p className='phone'><i className="fa-solid fa-phone"></i> Phone no:9975260955</p>
            <p><i className="fa-solid fa-envelope"></i>Email:<a className='phone' href='mailto:umkhairnar207@gmail.com'>umkhairnar207@gmail.com</a></p>
          </div>
          <div className='col-3'>
            <h3>Social Media</h3>
            <p><i className="fa-brands fa-facebook text-primary"></i> Facebook</p>
            <p><i className="fa-brands fa-instagram text-warning"></i> <a className='txt' href='https://www.instagram.com/bookease2024/'>Instagram</a></p>
            <p><i className="fa-brands fa-twitter text-info"></i> Twitter</p>
            <p><i className="fa-brands fa-linkedin text-bg-primary"></i> LinkedIn</p>
          </div>
          <div className='count col-6 '>
            <h3 className='hr3'>Visitors count</h3>
            <a href="https://www.hitwebcounter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://hitwebcounter.com/counter/counter.php?page=14623238&style=0036&nbdigits=5&type=page&initCount=0" title="Counter Widget" alt="Visit counter For Websites" border="0" />
            </a>  
          </div>
          <div className='copy col-12'>
            <p>Copyright <i className="fa-regular fa-copyright"> 2024 Made by Techtitans</i></p>
          </div>
        </div>
    </div>
  );
}

export default Footer;
