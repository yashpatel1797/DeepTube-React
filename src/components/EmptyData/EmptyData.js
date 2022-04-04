import React from 'react'
import noVideo from "assest/noVideo.png";
import { Link } from 'react-router-dom';
import styles from "./EmptyData.module.css"
const EmptyData = () => {
    return (
        <>
            <div className='text-center'>
                <img src={noVideo} alt="error" className={`${styles["img-responsive"]} img-responsive`} />
                <div className='spacer-1rem'></div>
                <Link to="/videos" className='btn btn-outline'>Explore</Link>
            </div>
        </>
    )
}

export { EmptyData }