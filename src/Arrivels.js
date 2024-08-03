
import arv1 from './book_7.png'
import arv2 from './book_8.png'
import arv3 from './book_10.png'
import arv4 from './book_12.png'
import arv5 from './book_13.png'
import arv6 from './book_14.png'
import arv7 from './book_15.png'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arive1 from './arrival_1.jpg'
import  arive2 from './arrival_2.jpg'
import   arive3 from './arrival_3.jpg'
import  arive4 from './arrival_4.jpg'
import  arive5 from './arrival_5.jpg'
import   arive6 from './arrival_6.jpg'
import arive7 from './arrival_7.jpg'
import  arive8 from './book_33.jpg'
import  arive9 from './arrival_9.jpg'
import  arive10 from './arrival_10.jpg'


import stand from './stand.png'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
function Arrivels() {
  return (
    <div className='arrive'>
      
       
       <marquee scrollamount="10" direction=""><h1 className='head'>New Arrival</h1> </marquee>


      <div className='contain ' >
        <div className='row'>
          <div className='content col-4'>
            <h1>Upto 35% off </h1>
            <p>         Discover the excitement of new arrivals with our exclusive offer of up to 55% off on all the latest books. <br />
              Dive into a world of captivating stories, insightful non-fiction, and thrilling adventures at unbeatable prices.<br />

              Don't miss out on this incredible opportunity to enrich your reading list and indulge in the magic of freshly arrived books, now more accessible than ever.</p>
            <button className='button ' ><Link className='button  ' to='/'>Shop Now</Link></button>
          </div>
          <div className='  col-6'>
            <div className='book_slider'>

            <Swiper
  spaceBetween={30}
  slidesPerView={2}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  breakpoints={{
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  }}
>
              <SwiperSlide >
                  <img src={arv1} alt="Slide 1" height={250} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arv2} alt="Slide 2" height={250} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arv3} alt="Slide 3" height={250} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arv4} alt="Slide 3" height={250} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arv5} alt="Slide 3" height={250} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arv6} alt="Slide 3" height={250} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={arv7} alt="Slide 3" height={250} />
                </SwiperSlide>
                

              </Swiper>
            </div>
            <div className='stand'>
              <img src={stand} style={{width:"92%"}} alt='' />
            </div>
          </div>
        </div>
      </div>
      <section>

      <div className='container-js'>
            <div className='row'>
            <div className=' mt-5 col-3'>
           <Card style={{ width: '16rem' }}>
  <div className='icons'>
   </div>
<div className='card'>
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive1} width={50} height={250} />
      <Card.Body >
        <Card.Title>By LOIS LOWRY</Card.Title>
        <Card.Text><p className='pr'>THE GIVER</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.450   <strike>Rs.500</strike> </div>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive2} width={50} height={250} />
      <Card.Body >
        <Card.Title>By DAVID McCULLOUGH</Card.Title>
        <Card.Text><p className='pr'>SILENT BONES</p>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive3} width={50} height={250} />
      <Card.Body >
        <Card.Title>By GEORGE McKAY</Card.Title>
        <Card.Text><p className='pr'>POLITICS,IDEALISM&REBELLION IN THE GARDEN</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.650   <strike>Rs.715</strike> </div>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive4} width={50} height={250} />
      <Card.Body >
        <Card.Title>By VICTORIYA AVEYARD</Card.Title>
        <Card.Text><p className='pr'>RED QUEEN     
          POWER IS THE DANGEROUS GAME
        </p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.365   <strike>Rs.400</strike> </div>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive5} width={50} height={250} />
      <Card.Body >
        <Card.Title>By UNKNOWN AUTHOR</Card.Title>
        <Card.Text><p className='pr'>HARPER LEE TO KILL A MOCKINGBRID</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.770   <strike>Rs.800</strike> </div>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive6} width={50} height={250} />
      <Card.Body >
        <Card.Title>By J.K.ROWLING</Card.Title>
        <Card.Text><p className='pr'>HARRY POTTER AND TGE PHILOSOPHER'S STONE</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.775   <strike>Rs.900</strike> </div>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive7} width={50} height={250} />
      <Card.Body >
        <Card.Title>By RICK RIORDEN</Card.Title>
        <Card.Text><p className='pr'>HEROES OF OLYMPUS THE LOST HERO</p>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive8} width={50} height={250} />
      <Card.Body >
        <Card.Title>By ANDREWS & WILSON</Card.Title>
        <Card.Text><p className='pr'>TOM CLANCY THE ACT OF DEFENCE</p>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive9} width={50} height={250} />
      <Card.Body >
        <Card.Title>By JOHN FLANAGAN</Card.Title>
        <Card.Text><p className='pr'>THE RUINS OF GORLANS</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.650  <strike>Rs.685</strike> </div>
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
     <Card.Img className=' cd p-3 bg-body-tertiary book-img' variant="top" src={arive10} width={50} height={250} />
      <Card.Body >
        <Card.Title>By RICK RIORDEN</Card.Title>
        <Card.Text><p className='pr'>PERCY JACKSON AND THE LIGHTNING THIEF</p>
        <div className='rate'><i class="fa-solid fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i><i class="fa-solid  fa-star text-success"></i> <i class="fa-regular fa-star text-success"></i></div>
       <div className='price'> Rs.900   <strike>Rs.955</strike> </div>
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
    </section>

    </div>
  )
}

export default Arrivels