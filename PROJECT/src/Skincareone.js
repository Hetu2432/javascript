import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Skincareone() {
    const { eid } = useParams();
    const [url1, seturl1] = useState('');
    const [title, settitle] = useState('');
    const [price, setprice] = useState('');
    const num = 1;
    const [d, setid] = useState(num);
    useEffect(() => {
        fetch('http://localhost:5000/skincare/' + eid)
            .then((res) => { return res.json() })
            .then((data) => {
                seturl1(data.url)
                setprice(data.price)
                settitle(data.title)
            })
    }, [])
    const addtocart = () => {
        const obj = { url: url1, title: title, price: `${d} * ${price}`,price1:`${price}`,quantity:`${d}` };
        fetch('http://localhost:5000/addtocart', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then((res) => {
                if (res.ok) {
                    toast.success('Added to cart successfully!');
                } else {
                    toast.error('Failed to add to cart');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('Failed to add to cart');
            });
            window.location.reload()
    };
    return (
        <>
            <Navbar />
            <ToastContainer/>
            <div className='row w2 m-auto mt-5'>
                <div className='col-md-6'>
                    <img src={url1} alt="" className='img-fluid' />
                </div>
                <div className='col-md-6'>
                    <nav aria-label="breadcrumb" className=''>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to='/' className='text-dark text-decoration-none'>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                    <p className='fs-1'>{title}</p>
                    <p><span className='text-decoration-line-through'>$7000.00</span><span className='fs-3 fw-bold'>${price}</span> & Free Shipping</p>
                    <p>Ut quis sollicitudin orci. Aliquam at libero non purus sodales sagittis eu ac neque. Nunc ipsum felis, vehicula eu aliquam sed, ultricies ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam viverra commodo finibus. Morbi laoreet lacus quis lobortis tempor. Nam tincidunt, lectus a suscipit fringilla, mauris turpis dapibus dolor, eu venenatis diam nibh id massa.</p>
                    <p>Nulla eget tortor ultrices, ultricies turpis a, accumsan turpis. Quisque dignissim semper leo ac accumsan. Quisque est nisl, bibendum ut elit quis, pellentesque vehicula tellus. Sed luctus mattis ante ac posuere.</p>
                    <div className='row w4 text-center mb-3'>
                        <div className='col border btn rounded-0' onClick={() => { setid(d - 1) }}>
                            -
                        </div>
                        <div className='col border btn rounded-0'>
                            {d}
                        </div>
                        <div className='col border btn rounded-0' onClick={() => { setid(d + 1) }}>
                           +
                        </div>
                    </div>
                    <button className='border-0 black text-light px-2 py-2' onClick={()=>{addtocart()}}>ADD TO CART</button>
                </div>
            </div>
            <hr className='w2 m-auto mt-5' />
        
            <Footer />
        </>
    )
}

export default Skincareone
