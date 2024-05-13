import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const handleOnDragStart = (e) => e.preventDefault();
  const navigate = useNavigate()
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 8 },
  };

  const items = [
    <div className="item " data-value="1" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="2" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice2.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="3" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice3.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="4" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice4.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="5" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice5.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="6" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice6.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="7" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="8" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice2.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="9" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice3.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="10" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice4.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="11" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice5.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="1" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice6.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="2" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="3" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice2.png" alt="" className='img-fluid' />

    </div>,
    <div className="item" data-value="4" onDragStart={handleOnDragStart}>
      <img src="./images/logo-alice3.png" alt="" className='img-fluid' />

    </div>,
  ];
  const [data, setdata] = useState('')
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setdata(data))
  }, []);
  const handleview = (id) => {
    navigate(`/shopone/${id}`)
    window.scrollTo(0,0)
  }
  return (
    <>
      <Navbar></Navbar>
      <div className='homebg'>
        <div className='padding1 w3'>
          <p className='fs-5'>NEW IN TOWN</p>
          <p className='display-1 fw-bold'>The New Beauty Collection</p>
          <p className='fs-3'>This new collection brings with it the most exciting lorem ipsum dolor sit amet</p>
          <button className='border-0 px-3 btncs py-2 fs-5'>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className='mt-3 navbar'>
        <AliceCarousel
          mouseTracking
          disableButtonsControls
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
      <div className='fs-5 pt-5 text-center'>
        POPULAR PRODUCTS
      </div>
      <div className='fs-1 fw-bold text-center'>
        Trending Now
      </div>
      {data && (
        <div className="navbar m-auto row row-cols-2 row-cols-md-4 g-4">
          {data.map((user, index) => (
            <div className="col" key={index} onClick={() => { handleview(`${user.id}`) }}>
              <div className="card po1 border-0">
                <div className='ab1 rounded-pill shadow'>
                  Sale!
                </div>
                <div className='ab2 rounded-circle shadow' >
                  <i className="fa-solid fa-bag-shopping fs-5"></i>
                </div>
                <span className="d-inline-block" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                  <div className='ab2 rounded-circle shadow' >
                    <i className="fa-solid fa-bag-shopping fs-5 po2" ></i>
                    <div className='bg-dark text-light ab3 p-2'>
                      Add to cart
                    </div>
                  </div>
                </span>
                <img src={user.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <h5 className="card-title">{user.title}</h5>
                  <p className="card-text fs-5 fw-bold"><span className='text-decoration-line-through'>$7000.00</span> ${user.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='fs-5 pt-5 text-center'>
        SHOP
      </div>
      <div className='fs-1 fw-bold text-center'>
        Best Selling
      </div>
      {data && (
        <div className="navbar m-auto row row-cols-2 row-cols-md-4 g-4">
          {data.map((user, index) => (
            <div className="col" key={index} onClick={() => { handleview(`${user.id}`) }}>
              <div className="card po1 border-0">
                <div className='ab1 rounded-pill shadow'>
                  Sale!
                </div>
                <div className='ab2 rounded-circle shadow' >
                  <i className="fa-solid fa-bag-shopping fs-5"></i>
                </div>
                <span className="d-inline-block" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                  <div className='ab2 rounded-circle shadow' >
                    <i className="fa-solid fa-bag-shopping fs-5 po2" ></i>
                    <div className='bg-dark text-light ab3 p-2'>
                      Add to cart
                    </div>
                  </div>
                </span>
                <img src={user.url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <h5 className="card-title">{user.title}</h5>
                  <p className="card-text fs-5 fw-bold"><span className='text-decoration-line-through'>$75.00</span> ${user.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='anotherbg1 mt-3'>
        <div className='padding1 w3'>
          <p className='fs-5'>NEW COLLECTION</p>
          <p className='display-3 fw-bold'>The beauty collection that makes all the difference!</p>
          <p className='fs-5'>Aliquam vulputate, nunc vitae suscipit aliquet, libero arcu hendrerit sapien.</p>
          <button className='border-0 px-3 btncs py-2 fs-5'>
            SHOP NOW
          </button>
        </div>
      </div>

      <div className='row me-0'>
        <div className='col-md-6 p-5'>
          <p className='fs-5'>JANE OLIVER</p>
          <p className='fs-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere...</p>
          <hr />
        </div>
        <div className='col-md-6 p-5'>
          <div className=''>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
          </div>
          <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.</p>
          <p>JAMES OLIVER</p>
          <hr />
          <div className=''>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
          </div>
          <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.</p>
          <p>JAMES OLIVER</p>
          <hr />
          <div className=''>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'yellow' }}></i>
          </div>
          <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere tincidunt purus, eu consectetur eros sodales nec. Maecenas ac erat pretium, ultricies nibh quis, mattis massa.</p>
          <p>JAMES OLIVER</p>
          <hr />
        </div>
      </div>

      <div className='row w1 m-auto'>
        <div className='col-lg-6'>
          <div className='anotherbg2'>
            <div className='padding2 w4'>
              <p className='fs-5'>NEW COLLECTIONS</p>
              <p className='display-5 fw-bold'>Awesome Makeup Kit Gift Sets</p>
              <p className='fs-5'>Find your unique style.</p>
              <button className='border-0 px-3 btncs py-2 fs-5'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='anotherbg3'>
            <div className='padding2 w4'>
              <p className='fs-5'>NEW COLLECTIONS</p>
              <p className='display-5 fw-bold'>The Ultimate Skincare Regime</p>
              <p className='fs-5'>Find your unique style.</p>
              <button className='border-0 px-3 btncs py-2 fs-5'>
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='row w1 m-auto mt-5'>
        <div className='col-lg-3'>
          <p>WHY CHOOSE US</p>
          <hr />
        </div>
        <div className='col-lg-3'>
          <div className='row'>
            <div className='col-2'>
              <div className='rounded-circle round1'>
                <i className="fa-solid fa-truck-fast"></i>
              </div>
            </div>
            <div className='col-10'>
              <p className='fs-4 fw-bold'>Fast Delivery</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className='row'>
            <div className='col-2'>
              <div className='rounded-circle round1'>
                <i className="fa-solid fa-dolly"></i>
              </div>
            </div>
            <div className='col-10'>
              <p className='fs-4 fw-bold'>Free Shipping</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
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

      <Footer />
    </>
  )
}

export default Home
