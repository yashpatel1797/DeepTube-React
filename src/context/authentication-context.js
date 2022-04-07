import { createContext, useContext, useReducer } from "react";
import { authReducer } from "reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const userInfo = JSON.parse(localStorage.getItem('userData')) || ""
    const tokenDetails = localStorage.getItem("token") || ""
    const [authState, authDispatch] = useReducer(authReducer, {
        isLogin: !!tokenDetails,
        token: tokenDetails,
        userDetails: userInfo
    })
    const { isLogin, token, userDetails: { firstName, lastName, email } } = authState
    return (<AuthContext.Provider value={{ isLogin, token, firstName, lastName, email, authDispatch }}>
        {children}
    </AuthContext.Provider>)
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }