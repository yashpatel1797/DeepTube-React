import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"
const Hero = () => {
    return (
        <>
            <main className="intro-img">
                <div className="intro-text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Reading</span>
                        <span className="heading-primary-sub">brings us unknown friends.</span>
                    </h1>
                    <Link to="/videos"><button className="btn btn-solid btn-round">
                        Shop now
                    </button></Link>
                </div>
            </main>
        </>
    )
}

export { Hero }