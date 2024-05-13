import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const validate = () => {
        let result = true;
        if (email === null || email === '') {
            result = false;
            toast.warning('please enter email');
        }
        if (password === null || password === '') {
            result = false;
            toast.warning('please enter password');
        }
        return result;
    }
    useEffect(() => { sessionStorage.clear(); }, [])
    const proceedlogin = (e) => {
        e.preventDefault();
        if (validate()) {
            axios.get(`http://localhost:5000/signupdata?email=${email}`)
                .then((response) => {
                    const userData = response.data;
                    if (userData.length === 0) {
                        toast.warning('User not found. Please enter a valid email');
                    } else {
                        const user = userData[0];
                        if (user.password === password) {
                            toast.success('Login success');
                            sessionStorage.setItem('name', user.name);
                            sessionStorage.setItem('userrole', user.role);
                            navigate('/');
                        } else {
                            toast.error('Please enter valid credentials');
                        }
                    }
                })
                .catch((error) => {
                    toast.error('Login failed due to: ' + error.message);
                });
        }
    };



    return (
        <>

            <ToastContainer />
            <div className='w3 m-auto my-5 shadow p-5'>
                <form onSubmit={proceedlogin}>
                    <label className='fs-1 fw-bold mb-3 rounded'>Login</label>
                    <div className="mb-3">
                        <label className="form-label">Email <span className='text-danger'>*</span></label>
                        <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} className="form-control" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password <span className='text-danger'>*</span></label>
                        <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="form-control" />
                    </div>
                    <label className='fs-5'>Don't have an account?<Link to='/register' className='text-decoration-none'>Sign up</Link></label>
                    <br />
                    <br />
                    <button type="submit" className="btn btn-success">Login</button>
                </form>
            </div>

        </>
    )
}

export default Login
