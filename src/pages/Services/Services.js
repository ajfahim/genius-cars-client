import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className='my-10'>
            <div className='flex flex-col items-center'>
                <h3 className='text-orange-600 font-bold text-2xl text-center'>Services</h3>
                <p className='w-1/2 text-center my-3 text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
            <div className='flex items-center'>
                <button className="btn btn-outline btn-error mx-auto">More Services</button>
            </div>
        </div>

    );
};

export default Services;