import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

const Info = () => {
  const [users, setUsers] = useState([])

  axios.get("http://localhost:8080/getcarts")
  .then(res=>setUsers(res.data))
  .catch(err=>console.log(err))
  return (
    
    users.map((cart)=>{
      return(
          <>
          
          <div className="receipt">
          <div className='column2'>
      <h2 className='rec'>Customer receipt</h2>
      <p className='rec2'><strong>Name:</strong> {cart.name}</p>
      <p className='rec2'><strong>Email:</strong> {cart.email}</p>
      <p className='rec2'><strong>Address:</strong> {cart.address}</p>
      <p className='rec2'><strong>Phone No:</strong> {cart.phoneno}</p>
      <p className='rec2'><strong>City:</strong> {cart.city}</p>
      <p className='rec2'><strong>Zip code:</strong> {cart.zipcode}</p>
      <p className='rec2'><strong>Book Title:</strong> {cart.bookTitle}</p>
      <p className='rec2'><strong>Quantity:</strong> {cart.quantity}</p>
      <p className='rec2'><strong>Total Amount:</strong> ${cart.quantity * cart.price}</p>
      <p className='rec3'>Thank you ! for visiting BookEase</p>
    </div>
    </div>
     
    
    </>
     ) })
  );
};

export default Info;
