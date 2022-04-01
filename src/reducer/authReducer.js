const authReducer = (state, { type, payload }) => {
    switch (type) {
        case "USER_LOGIN":
            return { ...state, isLogin: true }
        case "USER_LOGOUT":
            return {
                ...state, isLogin: false, token: "",
                userDetails: ""
            }
        case "TOKEN_ADD":
            return { ...state, token: payload }
        case "USER_DATA_ADD":
            return { ...state, userDetails: payload }
        default:
            return state
    }
}

const loginFormReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_EMAIL":
            return { ...state, email: payload }
        case "SET_PASSWORD":
            return { ...state, password: payload }
        default:
            return state;
    }
}
const signupFormReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_FIRSTNAME":
            return { ...state, firstName: payload }
        case "SET_LASTNAME":
            return { ...state, lastName: payload }
        case "SET_EMAIL":
            return { ...state, email: payload }
        case "SET_PASSWORD":
            return { ...state, password: payload }
        case "SET_CONFIRMPASSWORD":
            return { ...state, confirmPassword: payload }
        default:
            return state;
    }
}
export { authReducer, loginFormReducer, signupFormReducer }