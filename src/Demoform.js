// EnquiryForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';



const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneno: '',
    city: '',
    zipcode: '',
    // bookPublishedYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/postenquiries', formData);
      console.log('Enquiry submitted:', response.data);
      // Reset form after successful submission if needed
      setFormData({
        name: '',
        email: '',
        address: '',
        phoneno: '',
        city: '',
        zipcode: '',
        // bookPublishedYear: ''
      });
      alert('Enquiry submitted successfully!');
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again.');
    }
  };

  return (
    <div className='login'>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control className='log'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control className='log'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control className='log'
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="text">
        <Form.Label>Phone No</Form.Label>
        <Form.Control className='log'
          type="text"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control className='log'
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="zipcode">
        <Form.Label>Zip code</Form.Label>
        <Form.Control className='log'
          type="text"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          required
        />
      </Form.Group>

      

      <Button className='bt2' type="submit">
        Submit
      </Button>
    </Form>
    

    </div>
  );
};

export default EnquiryForm;
