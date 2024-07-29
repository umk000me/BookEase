import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book1 from './book_35.jpg'
import book2 from './book_36.jpg'
import book3 from './book_58.jpg'
import book4 from './book_37.jpg'
import book5 from './book_38.jpg'
import book6 from './book_39.jpg'
import book7 from './book_51.jpg'
import book8 from './book_41.jpg'
import book9 from './book_42.jpg'
import book10 from './book_52.jpg'
import book11 from './book_44.jpg'
import book12 from './book_46.jpg'
import book13 from './book_53.jpg'
import book14 from './book_55.jpg'
import book15 from './book_56.jpg'
import book16 from './book_57.jpg'

import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div> <div className='container-js'>
    <div className='row'>
    <div className=' mt-5 col-3'>
   <Card style={{ width: '16rem' }}>
<div className='icons'>
</div>
<div className='card'>
<Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book1} width={50} height={250} />
<Card.Body >
<Card.Title>By JOHN SANDFORD</Card.Title>
<Card.Text><p className='pr'>TOXIC PREY</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.650   <strike>Rs.700</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>
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
<Card.Title>By JACK REACHER</Card.Title>
<Card.Text><p className='pr'>LEE CHILD AND & ANDREW CHILD <br/>THE SECRET</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.440   <strike>Rs.600</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>
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
<Card.Title>By ERIC SCHWITZGEBEL</Card.Title>
<Card.Text><p className='pr'>THE WIERDNESS OF THE WORLD</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.650   <strike>Rs.700</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By SARAH J. MASS</Card.Title>
<Card.Text><p className='pr'>A COURT OF THORNS AND ROSES</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.880   <strike>Rs.1000</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By LAUREN ROBERTS</Card.Title>
<Card.Text><p className='pr'>RECKLESS</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.370   <strike>Rs.400</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By KRISTIN HANNAH</Card.Title>
<Card.Text><p className='pr'>DICK THE NIGHTINGLE A NOVEL</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.995   <strike>Rs.1250</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By JIM CHESHIRE</Card.Title>
<Card.Text><p className='pr'>MICROSOFT AZURE FUNDAMENTAL</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.965   <strike>Rs.1000</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By JOSEPH COX </Card.Title>
<Card.Text><p className='pr'>DARK WIRE THE LARGEST STRING OPERATION </p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.550   <strike>Rs.700</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By LYNNE McEWAN</Card.Title>
<Card.Text><p className='pr'>IN DARK WATER</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.600   <strike>Rs.665</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By VALERIE KEOGH</Card.Title>
<Card.Text><p className='pr'>THE MISTRESS</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.250   <strike>Rs.340</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By SCARLETT ST. CLAIR</Card.Title>
<Card.Text><p className='pr'>A TOUCH OF CHAOS </p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.250   <strike>Rs.290</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
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
<Card.Title>By KRISTIN HANNAH</Card.Title>
<Card.Text><p className='pr'>THE WOMEN</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.170   <strike>Rs.300</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
</div>
</Card>
</div>
<div className=' mt-5 col-3'>
   <Card style={{ width: '16rem' }}>
<div className='icons'>
</div>
<div className='card'>
<Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book13} width={50} height={250} />
<Card.Body >
<Card.Title>By HARLAN COBAN</Card.Title>
<Card.Text><p className='pr'>THIK TWICE</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.350   <strike>Rs.500</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
</div>
</Card>
</div>
<div className=' mt-5 col-3'>
   <Card style={{ width: '16rem' }}>
<div className='icons'>
</div>
<div className='card'>
<Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book14} width={50} height={250} />
<Card.Body >
<Card.Title>By LYNNE McEWAN</Card.Title>
<Card.Text><p className='pr'>THE GATHERING STORM</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.450   <strike>Rs.500</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
</div>
</Card>
</div>
<div className=' mt-5 col-3'>
   <Card style={{ width: '16rem' }}>
<div className='icons'>
</div>
<div className='card'>
<Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book15} width={50} height={250} />
<Card.Body >
<Card.Title>By WHEY</Card.Title>
<Card.Text><p className='pr'>DECISION QUALITY</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.455   <strike>Rs.700</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
</div>
</Card>
</div>
<div className=' mt-5 col-3'>
   <Card style={{ width: '16rem' }}>
<div className='icons'>
</div>
<div className='card'>
<Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={book16} width={50} height={250} />
<Card.Body >
<Card.Title>By ROBERT T. KIYOSAKI</Card.Title>
<Card.Text><p className='pr'>RICH DAD POOR DAD</p>
<div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
<div className='price'> Rs.800   <strike>Rs.900</strike> </div>
<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-eye"></i>
</div>
</Card.Text>
<Button className='button3'><Link className='link' to='/demoform'>Buy now</Link></Button>      </Card.Body>
</div>
</Card>
</div>


    </div>
</div>
</div>
  )
}

export default Featured