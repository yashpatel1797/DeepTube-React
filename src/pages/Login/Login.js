import React, { useReducer, useState } from 'react'
import './Login.css'
import { useAuth } from 'context'
import { loginFormReducer } from 'reducer'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate()
    const { authDispatch } = useAuth();

    const [{ email, password }, loginDispatch] = useReducer(loginFormReducer, { email: "", password: "" })


    const [togglePassword, setTogglePassword] = useState(false);
    const showPassword = togglePassword ? "visibility_off" : "visibility";
    const passwordVisibilityHandler = () => {
        setTogglePassword(togglePassword => !togglePassword)
    }

    const testHandler = () => {
        loginDispatch({ type: "SET_EMAIL", payload: "yashpatel@gmail.com" })
        loginDispatch({ type: "SET_PASSWORD", payload: "yashpatel" })

    }

    const submitHandler = async (e, email, password) => {
        e.preventDefault();
        try {

            const response = await axios.post("api/auth/login", { email, password });


            localStorage.setItem("token", response.data.encodedToken)
            localStorage.setItem('userData', JSON.stringify(response.data.foundUser));
            authDispatch({ type: "USER_LOGIN" })
            authDispatch({ type: "TOKEN_ADD", payload: response.data.encodedToken })
            authDispatch({ type: "USER_DATA_ADD", payload: response.data.foundUser })
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="spacer-3rem"></div>
            <div className="grid-50-50 login">
                <img
                    className="img-responsive"
                    alt="form_1"
                    src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <div className="login-form">
                    <h1>Sign-in</h1>
                    <div className="spacer-3rem"></div>
                    <form onSubmit={(e) => submitHandler(e, email, password)}>
                        <input
                            placeholder="Enter email"
                            name="email"
                            className="input-field"
                            type="email"
                            id="text"
                            value={email}
                            onChange={(e) => loginDispatch({ type: "SET_EMAIL", payload: e.target.value })}
                        />
                        <span className="password-input">
                            <input
                                placeholder="Enter password"
                                name="password"
                                className="input-field"
                                type={togglePassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => loginDispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                            />
                            <button type="button" className='btn btn-visibility' onClick={passwordVisibilityHandler}>
                                <span className="material-icons">
                                    {showPassword}
                                </span>
                            </button>
                        </span>
                        <section className="forgot-password">
                            <div>
                                <input type="checkbox" id="rememberMe" className="btn-remember" />
                                <label htmlFor="rememberMe" className="label-remember">Remember me</label>
                            </div>
                            <button className="btn">Forgot Password</button>
                        </section>
                        <button className="btn btn-solid btn-login" onClick={testHandler}>Test credentials</button>
                        <button className="btn btn-solid btn-login" type="submit">Login</button>
                    </form>
                    <div className="spacer-1rem"></div>
                    <Link to="/signup" className="link-signup">
                        <button className="btn btn-link">Create new account here</button></Link>
                </div>
            </div>
        </>
    )
}

export { Login }