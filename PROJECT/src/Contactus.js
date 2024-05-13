import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contactus() {
  return (
    <>
      <Navbar></Navbar>
      <div className='anotherbg6'>
        <div className='padding3 w-50'>
          <p className='fs-5'>GET IN TOUCH</p>
          <p className='display-3 fw-bold'>Message Us</p>
        </div>
      </div>

      <div className='row w1 m-auto mt-5 posi'>
        <div className='col-md-6 p-5'>
          <p className='fs-1'>Contact Us</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
          <p><i className='fa-solid fa-location-dot'></i> 123 Fifth avenue,New york,NY 10160</p>
          <p><i className='fa-solid fa-envelope'></i> contact@info.com</p>
          <p><i className='fa-solid fa-phone'></i> 9-334-7565-9787</p>
        </div>
        <div className='col-md-6 bg-light p-5'>
          <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">First name <span className='text-danger'>*</span></label>
              <input type="text" class="form-control" className='he2' id="validationCustom01" value="" required/>
                <div class="valid-feedback">
                  Looks good!
                </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom02" class="form-label">Last name <span className='text-danger'>*</span></label>
              <input type="text" className="form-control he2 rounded-0 border-1 border-dark" id="validationCustom02" value="" required/>
                <div class="valid-feedback">
                  Looks good!
                </div>
            </div>
            
            <div class="col-md-12">
              <label for="validationCustom03" class="form-label">Email <span className='text-danger'>*</span></label>
              <input type="email" class="form-control" id="validationCustom03" className='he2' required/>
                <div class="invalid-feedback">
                  Please provide a valid city.
                </div>
            </div>
            <div className="col-md-12 rounded-0">
              <label for="validationCustom03" class="form-label">Message <span className='text-danger'>*</span></label>
              <input type="text" class="form-control" className='he3' id="validationCustom03" required/>
                <div class="invalid-feedback">
                  Please provide a valid city.
                </div>
            </div>
            
            
            <div class="col-12">
              <button class="btn btn-dark text-light rounded-0" type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>

      <div class="ratio ratio-21x9 mt-5">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117996.95037632967!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e1!3m2!1spl!2spl!4v1672242444695!5m2!1spl!2spl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
      <Footer />
    </>
  )
}

export default Contactus
