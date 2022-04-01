import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"
const Hero = () => {
    return (
        <>
            <main className="intro-img">
                <div className="intro-text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Movies</span>
                        <span className="heading-primary-sub">take us to another world.</span>
                    </h1>
                    <Link to="/videos"><button className="btn btn-solid btn-round">
                        Watch Now
                    </button></Link>
                </div>
            </main>
        </>
    )
}

export { Hero }