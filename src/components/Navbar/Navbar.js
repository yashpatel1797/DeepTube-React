import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth, useVideo } from 'context'
import "./Navbar.css"

const Navbar = () => {
    const { isLogin, firstName, authDispatch } = useAuth();
    const { videoDispatch } = useVideo();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        authDispatch({ type: "USER_LOGOUT" })
    }
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
                        placeholder="Search for videos"
                        onChange={(e) => videoDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })}
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
                        <span>{firstName ? `Hi ${firstName}` : "Login"} </span>
                    </Link>
                    <span className="nav-notification-icon">
                        <Link to="/playlist" className="btn nav-user-btn">
                            <span className="material-icons"> playlist_add </span>
                            <span>Playlist</span></Link>
                    </span>
                    {isLogin &&
                        <Link to="/login" className="btn nav-user-btn" onClick={logoutHandler}>
                            <span className="material-icons" >
                                logout
                            </span>
                            <span>Logout</span>
                        </Link>
                    }
                </div>
            </nav>
        </>
    )
}

export { Navbar }