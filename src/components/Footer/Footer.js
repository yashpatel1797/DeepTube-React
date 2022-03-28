import React from 'react'
import { Link } from "react-router-dom"
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <footer>
                <p>Made by Yash Patel</p>
                <div>
                    <button className="btn">
                        <Link
                            to="https://github.com/yashpatel1797"
                            className="nav-icon-link link-no-style"
                        >
                            <span className="nav-icon">
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </span>
                        </Link>
                    </button>
                    <button className="btn">
                        <Link
                            to="https://twitter.com/yesgpatel"
                            className="nav-icon-link link-no-style"
                        >
                            <span className="nav-icon">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </span>
                        </Link>
                    </button>
                    <button className="btn">
                        <Link
                            to="https://www.linkedin.com/in/yashpatel797/"
                            className="nav-icon-link link-no-style"
                        >
                            <span className="nav-icon">
                                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                            </span>
                        </Link>
                    </button>
                </div>
            </footer>
        </>
    )
}

export { Footer }