import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className='anotherbg4'>
        <div className='padding3 w-50'>
          <p className='fs-5'>A FEW WORDS</p>
          <p className='display-3 fw-bold'>About Us</p>
        </div>
      </div>
      <div className='row w1 m-auto'>
        <div className='col-md-6 p-5'>
       <p className='display-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr />
        </div>
        <div className='col-md-6 bg-light p-5'>
          <p className='fs-3'>Cras ut ultricies risus. Etiam ac malesuada lectus. Sed congue nisi vitae lorem ullamcorper laoreet. In eget tellus mauris. Phasellus id ligula.</p>
          <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eget enim eget tincidunt. In finibus nisi ex, eu interdum urna euismod sit amet. Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id, dignissim in urna. </p>
          <p className='fs-5'>Morbi sollicitudin in magna sed tristique. Nulla pharetra sapien eros, sit amet bibendum nibh consectetur quis. Curabitur tortor dolor, fringilla eu fringilla id.</p>
        </div>  
      </div>
      <div className='anotherbg5 mt-3'>
        <div className='padding4'>
        <p className='display-3'>About Our Products</p>
        <hr />
        <p className='fs-5'>Proin at velit sed elit varius porttitor. Ut a suscipit quam, eu congue odio. Sed eget viverra est. Vivamus ut sodales neque. Sed vel dui et dolor placerat egestas id lacinia mauris</p>
        </div>
      </div>

      <div className='row w1 m-auto mt-5 border'>
        <div className='col-md-6'>
          <img src="./images/about-01.jpg" alt="" className='img-fluid' />
        </div>
        <div className='col-md-6 p-5 text-end bg-light'>
          <p>ABOUT ME</p>
          <p className='display-3'>Hi, I'm Diana!</p>
          <p className='fs-2'>I'm a 32 years old women entrepreneur, living in Miami, Florida</p>
          <p className='fs-5'>Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.</p>
          <p className='fs-5'>Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget</p>
        </div>
      </div>
      <div className='row w1 m-auto mt-5'>
        <div className='col-md-3'>
          <p>WHY CHOOSE US</p>
          <hr />
        </div>
        <div className='col-md-3'>
          <div className='row'>
            <div className='col-2'>
              <div className='rounded-circle round1'>
                <i class="fa-solid fa-truck-fast"></i>
              </div>
            </div>
            <div className='col-10'>
              <p className='fs-4 fw-bold'>Fast Delivery</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='row'>
            <div className='col-2'>
              <div className='rounded-circle round1'>
                <i class="fa-solid fa-dolly"></i>
              </div>
            </div>
            <div className='col-10'>
              <p className='fs-4 fw-bold'>Free Shipping</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='row'>
            <div className='col-2'>
              <div className='rounded-circle round1'>
                <i className='fa-solid fa-arrow-left'></i>
              </div>
            </div>
            <div className='col-10'>
              <p className='fs-4 fw-bold'>Easy Returns</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
