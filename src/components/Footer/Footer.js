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
                        <a
                            href="https://github.com/yashpatel1797"
                            className="nav-icon-link link-no-style" target="_blank"
                        >
                            <span className="nav-icon">
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </span>
                        </a>
                    </button>
                    <button className="btn">
                        <a
                            href="https://twitter.com/yesgpatel"
                            className="nav-icon-link link-no-style" target="_blank"
                        >
                            <span className="nav-icon">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </span>
                        </a>
                    </button>
                    <button className="btn">
                        <a
                            href="https://www.linkedin.com/in/yashpatel797/"
                            className="nav-icon-link link-no-style" target="_blank"
                        >
                            <span className="nav-icon">
                                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                            </span>
                        </a>
                    </button>
                </div>
            </footer>
        </>
    )
}

export { Footer }