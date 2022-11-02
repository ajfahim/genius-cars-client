import React from 'react';
import personImg from '../../../assets/images/about_us/person.jpg';
import partsImg from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-white">
            <div className="hero-content flex-col lg:flex-row  pl-0 ">
                <div className='w-1/2 relative' >
                    <img src={personImg} alt="person" className="rounded-lg shadow-2xl w-3/5 h-full object-cover" />
                    <img src={partsImg} alt="parts" className="rounded-lg shadow-2xl absolute right-0 top-1/2 w-1/2 border-8 border-white" />
                </div>
                <div className='w-1/2 ml-10'>
                    <p className='text-5xl text-orange-500 text-bold'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6 text-gray-500">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-error my-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;