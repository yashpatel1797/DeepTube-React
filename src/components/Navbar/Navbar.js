import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-section">
                    <Link to="/" className='logo-title fn-size-l'>DeepTube</Link>

                </div>
                <div className="nav-search">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for product"
                    />
                    <Link to="" className="btn btn-search">
                        <span className="material-icons"> search </span>
                    </Link>
                </div>
                <div className="nav-hamburger">
                    <span className="material-icons"> menu </span>
                </div>
                <div className="nav-user">
                    <Link to="/login" className="btn nav-user-btn">
                        <span className="material-icons"> person </span>
                        <span>Login</span>

                    </Link>
                    <span className="nav-notification-icon">
                        <Link to="/playlist" className="btn nav-user-btn">
                            <span className="material-icons"> playlist_add </span>


                            <span>Playlist</span></Link>
                    </span>
                </div>
            </nav>
        </>
    )
}

export { Navbar }