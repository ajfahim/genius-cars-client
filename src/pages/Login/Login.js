import React from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <figure><img src={loginImg} alt="" /></figure>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-5xl'>Login</h2>

                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                        </form>

                        <div className=' text-center my-3'>
                            <p>or Login with</p>
                            <div className='flex justify-around items-center my-3'>
                                <FaGoogle className='cursor-pointer' size={25}></FaGoogle>
                                <FaLinkedin className='cursor-pointer' size={25}></FaLinkedin>
                                <FaFacebook className='cursor-pointer' size={25}></FaFacebook>
                            </div>
                            <div>
                                New to this site? <span className='text-bold text-orange-600'><Link to='/signup'>Sign Up</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;