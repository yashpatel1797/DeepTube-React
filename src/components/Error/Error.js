import React from 'react'
import error from "assest/error.webp";
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <>
            <div className='text-center'>
                <img src={error} alt="error" />
                <h3>Page not found</h3>
                <div className='spacer-1rem'></div>
                <Link to="/videos" className='btn btn-outline'>Explore</Link>
            </div>
        </>
    )
}

export { Error }