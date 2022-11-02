import React from 'react';
import './Banner.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className="gradient">
                <img src={image} alt="banner 1" className="w-full rounded-xl" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute transform -translate-y-1/2 left-16 top-1/3 ">
                <h3 className='text-6xl font-bold text-white'>Affordable</h3> <br />
                <h3 className='text-6xl font-bold text-white'>Price For Car</h3> <br />
                <h3 className='text-6xl font-bold text-white'>Servicing</h3>
            </div>
            <div className=" w-1/2 absolute transform -translate-y-1/2 left-16 top-1/2 mt-10">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute transform -translate-y-1/2 left-16 top-3/4 ">
                <button className="btn btn-error mr-5">Discover More</button>
                <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItem;