import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book1 from './book_22.jpg';
import book2 from './book_23.jpg';
import book3 from './book_24.jpg';
import book4 from './book_25.jpg';
import book5 from './book_5.jpg';
import book6 from './book_6.jpg';
import book7 from './book_20.jpg';
import book8 from './book_19.jpg';
import book9 from './book_9.jpg';
import book10 from './book_11.jpg';
import book11 from './book_16.jpg';
import book12 from './book_17.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const books = [
    { src: book1, author: "ETHAN MOLLICK", title: "Living And Working with AI", price: 350, originalPrice: 500 },
    { src: book2, author: "RACHEL LINCH", title: "SILENT BONES", price: 440, originalPrice: 600 },
    { src: book3, author: "ROBERT JORDAN", title: "THE EYE OF THE WORLD", price: 650, originalPrice: 700 },
    { src: book4, author: "UNKNOWN", title: "ARTIFICIAL INTELLIGENCE AND MARKET ABUSE LEGISLATION", price: 880, originalPrice: 1000 },
    { src: book5, author: "LUCKY CREHAN", title: "CLEVER LANDS", price: 270, originalPrice: 400 },
    { src: book6, author: "UNKNOWN", title: "DICK FRANCIS SHATTERED", price: 195, originalPrice: 250 },
    { src: book7, author: "ROBERT GREENE", title: "THE 48 LAWS OF POWER", price: 965, originalPrice: 1000 },
    { src: book8, author: "JAY RATAN & P.LAL", title: "A NOVEL OF PEACENT INDIA", price: 350, originalPrice: 500 },
    { src: book9, author: "PETER CAWDRON", title: "FREE FALL", price: 600, originalPrice: 665 },
    { src: book10, author: "ETHAN MOLLICK", title: "BORING GIRLS THE NOVEL SARA TAYLOR", price: 150, originalPrice: 185 },
    { src: book11, author: "RAKSHANDA JALIL", title: "THE LOHARU LEGACY", price: 250, originalPrice: 290 },
    { src: book12, author: "SYEDA IMAN", title: "LIFE LIKE WINE", price: 350, originalPrice: 500 }
  ];

  return (
    <div className='container-js'>
      <div className='row'>
        {books.map((book, index) => (
          <div className='mt-5 col-3' key={index}>
            <Card style={{ width: '95%' }}>
              <div className='icons'></div>
              <div className='card'>
                <Card.Img className='cd p-3 bg-body-tertiary book-img' variant="top" src={book.src} width={50} height={250} />
                <Card.Body>
                  <Card.Title>By {book.author}</Card.Title>
                  <Card.Text>
                    <p className='pr'>{book.title}</p>
                    <div className='rate'>
                      <i className="fa-solid fa-star text-success"></i>
                      <i className="fa-solid fa-star text-success"></i>
                      <i className="fa-solid fa-star text-success"></i>
                      <i className="fa-solid fa-star text-success"></i>
                      <i className="fa-regular fa-star text-success"></i>
                    </div>
                    <div className='price'>
                      Rs.{book.price} <strike>Rs.{book.originalPrice}</strike>
                    </div>
                    <div className='icons'>
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-regular fa-eye"></i>
                    </div>
                  </Card.Text>
                  <Button className='button3'>
                    <Link className='link' to='/cart'>Buy now</Link>
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
