import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function Cart() {
    const navigate = useNavigate()
    const handlecheckout=()=>{
        navigate('/checkout')
        window.scrollTo(0,0)
    }
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addtocart')
        .then((res)=>{return res.json()})
        .then((data)=>{setdata(data)})
    },[])
    const deleteone = (id) => {
        
        fetch(`http://localhost:5000/addtocart/${id}`, {
            method: 'DELETE',
        })
        .then((res)=>{
            window.location.reload()
            toast.success('Removed from cart successfully')
        })
            
    };
    const updateQuantity = (id, newQuantity) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
    
        fetch(`http://localhost:5000/addtocart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: newQuantity })
        })
        .then(() => {
            setdata(updatedData);
            // toast.success('Quantity updated successfully');
        })
        .catch((error) => console.error('Error updating quantity:', error));
    };
    
    const subtotal = data.reduce((acc, item) => acc + (item.price1 * item.quantity), 0);

    // Total is assumed to be the same as subtotal for now
    const total = subtotal;
    return (
        <>
            <Navbar />
            <div className='w2 m-auto mt-5'>
                <p className='fs-1'>Cart</p>
                <div className='table-responsive'>
                <table class="table border">
                    <thead className='table-light'>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {data && data.map((user,index)=>(
                            <tr>
                            <td><div className='btn' onClick={()=>{deleteone(`${user.id}`)}}>
                            <i className='fa-solid fa-close'></i>
                            </div></td>
                            <td><img src={user.url} alt="" style={{height:"70px",width:"100px"}}/></td>
                            <td>{user.title}</td>
                            <td>{user.price1}</td>
                            <td>
                                <div className='row w-75 text-center'>
                                    <div className='col border btn rounded-0' onClick={() => updateQuantity(user.id, user.quantity - 1)}>
                                        -
                                    </div>
                                    <div className='col border btn rounded-0'>
                                        {user.quantity}
                                    </div>
                                    <div className='col border btn rounded-0' onClick={() => updateQuantity(user.id, user.quantity + 1)}>
                                        +
                                    </div>
                                </div>
                            </td>
                            <td>{user.quantity*user.price1}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <div className='row w2 m-auto'>
                <div className='col-lg-6'>
                    
                </div>
                <div className='col-lg-6'>
                <table class="table border">
                    <thead className='table-light'>
                        <tr className='fs-4'>
                            <th scope=" display-1">Cart Totals</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='fs-5'>Total</td>
                            <td className='fs-5'>${total.toFixed(2)}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <button className='bg-dark text-light w-100 my-3 py-3 fs-5   m-auto' onClick={handlecheckout}>PROCEED TO CHECKOUT</button>
                    </tfoot>
                </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
