import React, { useReducer, useState } from 'react'
import { signupFormReducer } from 'reducer'
import { useAuth } from "context"
import "./Signup.css"
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'
import { Loader } from "components"

const Signup = () => {
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const [{ firstName, lastName, email, password, confirmPassword }, signupDispatch
    ] = useReducer(signupFormReducer, { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [togglePassword, setTogglePassword] = useState(false);
    const [toggleRePassword, setToggleRePassword] = useState(false);


    const showPassword = togglePassword ? "visibility_off" : "visibility";
    const showRePassword = toggleRePassword ? "visibility_off" : "visibility";

    const passwordVisibilityHandler = () => {
        setTogglePassword(togglePassword => !togglePassword)
    }
    const rePasswordVisibilityHandler = () => {
        setToggleRePassword(toggleRePassword => !toggleRePassword)
    }
    const submitHandler = async (e, firstName, lastName, email, password, confirmPassword) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const response = await axios.post('api/auth/signup', { firstName, lastName, email, password });
            localStorage.setItem("token", response.data.encodedToken)
            localStorage.setItem('userData', JSON.stringify(response.data.createdUser));
            authDispatch({ type: "USER_LOGIN" })
            authDispatch({ type: "TOKEN_ADD", payload: response.data.encodedToken })
            authDispatch({ type: "USER_DATA_ADD", payload: response.data.createdUser })
            setIsLoading(false);
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="spacer-3rem"></div>
            {isLoading ? <Loader /> : (<div className="grid-50-50 login">
                <img
                    className="img-responsive"
                    alt="form_1"
                    src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <div className="login-form">
                    <h1>Signup</h1>
                    <div className="spacer-3rem"></div>
                    <form onSubmit={(e) => submitHandler(e, firstName, lastName, email, password, confirmPassword)}>
                        <input
                            placeholder="Enter first name"
                            className="input-field"
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => signupDispatch({ type: "SET_FIRSTNAME", payload: e.target.value })}
                        />
                        <input
                            placeholder="Enter last email"
                            className="input-field"
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => signupDispatch({ type: "SET_LASTNAME", payload: e.target.value })}
                        />
                        <input
                            placeholder="Enter email"
                            className="input-field"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => signupDispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        />
                        <span className="password-input">
                            <input
                                placeholder="Enter password"
                                className="input-field"
                                type={togglePassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => signupDispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                            />
                            <button type="button" className='btn btn-visibility' onClick={passwordVisibilityHandler}>
                                <span className="material-icons">
                                    {showPassword}
                                </span>
                            </button>
                        </span>
                        <span className='password-input'>
                            <input
                                placeholder="Confirm password"
                                className="input-field"
                                type={toggleRePassword ? "text" : "password"}
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => signupDispatch({ type: "SET_CONFIRMPASSWORD", payload: e.target.value })}
                            />
                            <button type="button" className='btn btn-visibility' onClick={rePasswordVisibilityHandler}>
                                <span className="material-icons">
                                    {showRePassword}
                                </span>
                            </button>
                            {confirmPassword === password ? "" : <div className='alert alert-danger'><span className="material-icons alert-icon"> warning </span>Password doesn't match</div>}
                        </span>
                        <div className="spacer-1rem"></div>
                        <input type="checkbox" id="rememberMe" className="btn-remember" />
                        <label htmlFor="rememberMe" className="label-remember"
                        >I accept all Terms & conditions</label
                        >
                        <button className="btn btn-solid btn-signup">Create New Account</button>
                    </form>
                    <div className="spacer-1rem"></div>
                    <Link to="/login" className="link-signup">
                        <button className="btn btn-link">Already have account</button>
                    </Link>
                </div>
            </div>)}
        </>
    )
}
export { Signup }