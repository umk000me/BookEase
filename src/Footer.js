import React from 'react'

function Footer() {
  return (
    <div className='container2  shadow-lg border border-2 rounded-4  '>
        <div className='row'>
            <div className=' col-3  '>
              <h3>Company</h3>
                <p>Career</p>
                <p>About us</p>
                <p>Contact us </p>
                <p>Team</p>
                </div>
                <div className='col-3  '>
                    <h3>Policies</h3>
                  <p>Privacy Policies</p>
                  <p> Terms of Use</p>
                  <p> Secure Shopping</p>
                  <p>Copyright Policy </p>                  
                    
                    </div>
               <div className='col-3  '>
                <h3>  Contact us:</h3>
                <p className='phone'><i class="fa-solid fa-phone"></i> Phone no:9876543210</p>
                <p ><i class="fa-solid fa-envelope"></i> Email:<a className='phone' href='umkhairnar207@gmail.com' >umkhairnar207@gmail.com</a></p>
               

            </div>
            <div className='col-3 '>
                <h3>Social Media</h3>
                <p ><i class="fa-brands fa-facebook text-primary"></i> Facebook</p>
                <p ><i class="fa-brands fa-instagram text-warning"></i>  <a className='txt' href='https://www.instagram.com/bookease2024/'>Instagarm</a> </p>
            <p><i class="fa-brands fa-square-twitter text-info"></i>  Twitter</p>
                <p><i class="fa-brands fa-linkedin text-bg-primary"></i>    linkedin</p>
                
            </div>
            <div className='count col-3'>
              <h3>Visitors count </h3>
            <a href="https://www.hitwebcounter.com" target="_blank">
<img src="https://hitwebcounter.com/counter/counter.php?page=14623238&style=0036&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></a>  
        </div>
        <div className='copy col-9'>Copyright <i class="fa-regular fa-copyright"> 2024  Made by Techtitans</i></div>
        </div>
    </div>
  )
}

export default Footer
