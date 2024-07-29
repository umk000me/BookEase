

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Info from './Info';


const Cartform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneno: '',
    city: '',
    zipcode: '',
    bookTitle: '',
    quantity: 0,
    price: 0,
  });

  const [showReceipt, setShowReceipt] = useState(false); // State to toggle receipt display

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/postcarts', formData);
      console.log('Enquiry submitted:', response.data);
      setShowReceipt(true); // Show receipt after successful submission
      // Reset form after successful submission if needed
      setFormData({
        name: '',
        email: '',
        address: '',
        phoneno: '',
        city: '',
        zipcode: '',
        bookTitle: '',
        quantity: 0,
        price: 0,
      });
      alert('Enquiry submitted successfully!');
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <div className='login'>
      {!showReceipt ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="phoneno">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="text"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="zipcode">
            <Form.Label>Zip code</Form.Label>
            <Form.Control
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="bookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              name="bookTitle"
              value={formData.bookTitle}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price per Book</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button className='bt2' type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <Info formData={formData} />
      )}
    </div>
  );
};

export default Cartform;
