import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Navbar() {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false)
        }
        else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('name');
            if (username === '' || username === null) {
                navigate('/login')
            }
            else {
                displayusernameupdate(username)
            }
        }
    }, [location])
    const handlecart = () => {
        navigate('/cart')
        window.scrollTo(0, 0)
    }
    const handlecheckout = () => {
        navigate('/checkout')
        window.scrollTo(0, 0)
    }
    const [data1, setdata1] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addtocart')
            .then((res) => { return res.json() })
            .then((data) => {
                setdata1(data)

            })
    }, [])
    const deleteone = (id) => {

        fetch(`http://localhost:5000/addtocart/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                window.location.reload()
                toast.success('Removed from cart successfully')
            })

    };

    const subtotal = data1.reduce((acc, item) => acc + (item.price1 * item.quantity), 0);

    return (
        <>
            <ToastContainer />
            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Shopping cart</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="mt-3 m-auto">
                        {data1 && data1.map((user, index) => (
                            <div className="card mb-3" key={index}>
                                {/* Your card component */
                                    <div className="row g-0">
                                        <div className="col-md-4 p-3">
                                            <img src={user.url} className="img-fluid" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{user.title}<span className='float-end'><i className='fa-solid fa-close' onClick={() => { deleteone(`${user.id}`) }}></i></span></h5>
                                                <p className="card-text">{user.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className='offcanvas-footer'>
                    <hr />
                    <span className='ps-2 fw-bold'>SUBTOTAL <span className='float-end pe-2'>
                        ${subtotal.toFixed(2)}
                    </span></span>
                    <hr />
                    <button className='w-100 fs-5 border-0 bg-dark text-light py-2' onClick={handlecart}>VIEW CART</button>
                    <button className='w-100 my-2 fs-5 border-0 bg-dark text-light py-2' onClick={handlecheckout}>CHECKOUT</button>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom">
                <div className="container-fluid">
                    <div className=''>
                        <img src="./images/logo-regular.png" alt="" className='img-fluid' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <div className='pink'></div>
                                {/* <Link to='/shop' className='text-dark  text-decoration-none'>SHOP ALL</Link> */}
                                <NavLink
                                    to="/shop"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "green"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >
                                   SHOP ALL
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                {/* <Link to='/makeup' className='text-dark  text-decoration-none'>MAKEUP</Link> */}
                                <NavLink
                                    to="/makeup"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "green"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >
                                    MAKEUP
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                {/* <Link to='/skincare' className='text-dark  text-decoration-none'>SKIN CARE</Link> */}
                                <NavLink
                                    to="/skincare"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "green"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >
                                    SKIN CARE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                {/* <Link to='/haircare' className='text-dark  text-decoration-none'>HAIR CARE</Link> */}
                                <NavLink
                                    to="/haircare"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "green"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >
                                    HAIR CARE
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                {/* <Link to='/about' className='text-dark  text-decoration-none'>ABOUT</Link> */}
                                <NavLink
                                    to="/about"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "green"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div className='pink'></div>
                                {/* <Link to='/contactus' className='text-dark  text-decoration-none'>CONTACT</Link> */}
                                <NavLink
                                    to="/contactus"
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? "green"
                                            : "black",
                                    })}
                                    className="fs-5 text-decoration-none"
                                >
                                    CONTACT
                                </NavLink>
                            </li>

                        </ul>

                        <div className="d-flex">
                            {/* <Link to='/login' className='btn'><i className="fa-solid fa-user"></i></Link> */}
                            {showmenu &&
                                <div>
                                    <span className='btn'>Welcome <b>"{displayusername}"</b></span>
                                    <Link to='/login' className='btn border rounded p-2'>Logout</Link>
                                </div>}
                            <button type="button" className="btn position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <span className='fw-bold text-success'>${subtotal.toFixed(2)}</span> <i class="fa-solid fa-cart-shopping fs-5"></i>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                                    {data1.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
