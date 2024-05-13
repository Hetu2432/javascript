import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Register() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();



    const isvalidate = () => {
        let isprocessed = true;
        let errormessage = "please enter value in ";
        if (name === null || name === "") {
            isprocessed = false;
            errormessage += 'name,';
        }
        if (email === null || email === "") {
            isprocessed = false;
            errormessage += 'email,';
        }
        if (phone === null || phone === "") {
            isprocessed = false;
            errormessage += 'phone,';
        }
        if (password === null || password === "") {
            isprocessed = false;
            errormessage += 'password,';
        }
        if (!isprocessed) {
            toast.warning(errormessage);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { }
            else {
                isprocessed = false;
                toast.warning('please enter the valid email');
            }
        }
        return isprocessed;
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        let obj = { name, email, phone, password };
        if (isvalidate()) {
            fetch('http://localhost:5000/signupdata', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(obj),
            })
                .then((res) => {
                    toast.success('Registered successfully');
                    navigate('/login');
                })
                .catch((err) => {
                    toast.error('Failed:' + err.message);
                });
        }
    };

    return (
        <>
            
            <ToastContainer />
            <div className='w3 m-auto my-5 shadow p-5' >
                <form onSubmit={handlesubmit} >
                    <label className='fs-1 fw-bold mb-3 rounded' > Signup </label>
                    <div className="mb-3" >
                        <label className="form-label" > Name < span className='text-danger' > * </span></label >
                        <input type="text" className="form-control" aria-describedby="emailHelp"
                            value={name}
                            onChange={(e) => { setname(e.target.value) }} />
                    </div>
                    <div className="mb-3" >
                        <label className="form-label" > Email < span className='text-danger' > * </span></label >
                        <input type="email" className="form-control" aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }} />
                    </div>
                    <div className="mb-3" >
                        <label className="form-label" > Phone < span className='text-danger' > * </span></label >
                        <input type="text" className="form-control"
                            value={phone}
                            onChange={(e) => { setphone(e.target.value) }} />
                    </div>
                    <div className="mb-3" >
                        <label className="form-label" > Set Password < span className='text-danger' > * </span></label >
                        <input type="password" className="form-control"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }} />
                    </div>
                    <label className='fs-5' > Have an account ? < Link to='/login'
                        className='text-decoration-none' > login </Link></label >
                    <br /> <br />
                    <button type='submit' className="btn btn-primary" > Submit </button>
                </form>
            </div>
        </>
    );
}

export default Register;
