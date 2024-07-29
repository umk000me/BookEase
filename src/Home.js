import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book1 from './book_22.jpg'
import book2 from './book_23.jpg'
import book3 from './book_24.jpg'
import book4 from './book_25.jpg'
import book5 from './book_5.jpg'
import book6 from './book_6.jpg'
import book7 from './book_20.jpg'
import book8 from './book_19.jpg'
import book9 from './book_9.jpg'
import book10 from './book_11.jpg'
import book11 from './book_16.jpg'
import book12 from './book_17.jpg'

import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      
        <div className='container-js'>
            <div className='row'>
            <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book1} width={50} height={250} />
      <Card.Body >
        <Card.Title>By ETHAN MOLLICK</Card.Title>
        <Card.Text><p className='pr'>Living And Working with AI</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.350   <strike>Rs.500</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>
      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book2} width={50} height={250} />
      <Card.Body >
        <Card.Title>By RACHEL LINCH</Card.Title>
        <Card.Text><p className='pr'>SILENT BONES</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.440   <strike>Rs.600</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='./cart'>Buy now</Link></Button>
      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book3} width={50} height={250} />
      <Card.Body >
        <Card.Title>By ROBERT JORDAN</Card.Title>
        <Card.Text><p className='pr'>THE EYE OF THE WORLD</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.650   <strike>Rs.700</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3' ><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book4} width={50} height={250} />
      <Card.Body >
        <Card.Title>By UNKNOWN</Card.Title>
        <Card.Text><p className='pr'>ARTIFICIAL INTELLIGENCE AND MARKET ABUSE LEGISLATION</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.880   <strike>Rs.1000</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book5} width={50} height={250} />
      <Card.Body >
        <Card.Title>By LUCKY CREHAN</Card.Title>
        <Card.Text><p className='pr'>CLEVER LANDS</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.270   <strike>Rs.400</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book6} width={50} height={250} />
      <Card.Body >
        <Card.Title>By UNKNOWN</Card.Title>
        <Card.Text><p className='pr'>DICK FRANCIS SHATTERED</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.195   <strike>Rs.250</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>


    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book7} width={50} height={250} />
      <Card.Body >
        <Card.Title>By ROBERT GREENE</Card.Title>
        <Card.Text><p className='pr'>THE 48 LAWS OF POWER</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.965   <strike>Rs.1000</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>


    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book8} width={50} height={250} />
      <Card.Body >
        <Card.Title>By JAY RATAN & P.LAL</Card.Title>
        <Card.Text><p className='pr'>A NOVEL OF PEACENT INDIA</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.350   <strike>Rs.500</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book9} width={50} height={250} />
      <Card.Body >
        <Card.Title>By PETER CAWDRON</Card.Title>
        <Card.Text><p className='pr'>FREE FALL</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.600   <strike>Rs.665</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>


    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book10} width={50} height={250} />
      <Card.Body >
        <Card.Title>By ETHAN MOLLICK</Card.Title>
        <Card.Text><p className='pr'>BORING GIRLS THE NOVEL SARA TAYLOR</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.150   <strike>Rs.185</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book11} width={50} height={250} />
      <Card.Body >
        <Card.Title>By RAKSHANDA JALIL</Card.Title>
        <Card.Text><p className='pr'>THE LOHARU LEGACY</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.250   <strike>Rs.290</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book12} width={50} height={250} />
      <Card.Body >
        <Card.Title>By SYEDA IMAN</Card.Title>
        <Card.Text><p className='pr'>LIFE LIKE WINE</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.350   <strike>Rs.500</strike> </div>
        <div className='icons'>
  <i class="fa-solid fa-magnifying-glass"></i>
  <i class="fa-regular fa-heart"></i>
  <i class="fa-regular fa-eye"></i>
</div>
        </Card.Text>
        <Button className='button3'><Link className='link' to='/cart'>Buy now</Link></Button>      </Card.Body>
      </div>
    </Card>
    </div>

    
  
            </div>
        </div>
    </div>
  )
}

export default Home