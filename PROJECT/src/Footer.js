import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='row w1 m-auto bg-light border-bottom border-3 mt-5'>
                <div className='col-sm-5 col-sm-12 p-3'>
                    <p className='fs-3'>Subscribe to our newsletter</p>
                </div>
                <div className='col-sm-7 col-sm-12 text-end p-3'>
                    <input type="email" name="" placeholder='Your email address' className='inp1' />&nbsp;
                    <button className='bg-dark text-light border-0 py-2'>Subscribe</button>
                </div>
            </div>

            <div className='w1 row m-auto border-bottom border-3 bg-light p-5'>
                <div className='col-sm-6'>
                    <img src="./images/logo-regular.png" alt="" className='img-fluid' />
                </div>
                <div className='col-sm-2'>
                    <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/' className='text-dark text-decoration-none'>HOME</Link>
                        </li>
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/shopall' className='text-dark text-decoration-none'>SHOP ALL</Link>
                        </li>
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/makeup' className='text-dark  text-decoration-none'>MAKEUP</Link>
                        </li>
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/skincare' className='text-dark  text-decoration-none'>SKIN CARE</Link>
                        </li>
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/haircare' className='text-dark  text-decoration-none'>HAIR CARE</Link>
                        </li>
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/about' className='text-dark  text-decoration-none'>ABOUT</Link>
                        </li>
                        <li className="">
                            <div className='pink'></div>
                            <Link to='/contactus' className='text-dark  text-decoration-none'>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className='col-sm-2'>
                    <ul className="navbar-nav m-auto mb-2 mb-sm-0 ">
                        <li className="nav-item">
                            <div className='pink'></div>
                            <Link to='/' className='text-dark text-decoration-none'>Refund Policy</Link>
                        </li>
                        <li className="nav-item">
                            <div className='pink'></div>
                            <Link to='/' className='text-dark text-decoration-none'>Terms & Conditions</Link>
                        </li>
                        <li className="nav-item">
                            <div className='pink'></div>
                            <Link to='/' className='text-dark  text-decoration-none'>FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <div className='pink'></div>
                            <Link to='/' className='text-dark  text-decoration-none'>Privacy Policy</Link>
                        </li>

                    </ul>
                </div>
                <div className='col-sm-2 text-end fs-4'>
                    <a href="#" className='text-dark'><i className='fa-brands fa-facebook'></i></a>
                    &nbsp;&nbsp;
                    <a href="#" className='text-dark'><i className='fa-brands fa-twitter'></i></a>
                    &nbsp;&nbsp;
                    <a href="#" className='text-dark'><i className='fa-brands fa-instagram'></i></a>
                </div>
            </div>
            <div className='p-5 bg-light fs-5'>
                Copyright © 2024 Be Bold | Powered by Be Bold
            </div>
        </>
    )
}

export default Footer
