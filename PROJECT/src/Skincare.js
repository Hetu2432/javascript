import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Shop() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;
    const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/skincare')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    const handleview = (eid)=>{
        navigate(`/skincareone/${eid}`)
        window.scrollTo(0,0)
    }
    // Pagination logic
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <nav aria-label="breadcrumb" className='w2 mt-5 m-auto'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/' className='text-dark text-decoration-none'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Skin Care
</li>
                </ol>
            </nav>
            <p className='display-2 w2 m-auto fw-bold'>Skin Care
</p>
            <div className='w2 m-auto mt-5'>
                <span>Showing {indexOfFirstCard + 1}–{Math.min(indexOfLastCard, data.length)} of {data.length} results</span>
                <select className='float-end border-0'>
                    <option value="">Default sorting</option>
                    <option value="">Sort by popularity</option>
                    <option value="">Sort by average rating</option>
                    <option value="">Sort by latest</option>
                    <option value="">Sort by price: low to high</option>
                    <option value="">Sort by price: high to low</option>
                </select>
            </div>
            <div className="w2 mt-3 m-auto row row-cols-2 row-cols-md-4 g-4">
                {currentCards.map((user, index) => (
                    <div className="col" key={index} onClick={()=>{handleview(`${user.id}`)}}>
                        {/* Your card component */
                            <div className="card po1 border-0">
                                <div className='ab1 rounded-pill shadow'>
                                    Sale!
                                </div>
                                <div className='ab2 rounded-circle shadow' >
                                    <i className="fa-solid fa-bag-shopping fs-5"></i>
                                </div>
                                <span class="d-inline-block" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
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
                        }
                    </div>
                ))}
            </div>
            <ul className="pagination w2 m-auto mt-5">
                {Array.from({ length: Math.ceil(data.length / cardsPerPage) }).map((_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <a href="#" className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</a>
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    );
}

export default Shop;
