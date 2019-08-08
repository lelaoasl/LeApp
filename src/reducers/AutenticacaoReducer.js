const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    signupError: '',
    signup_sucessfull: '',
    loginError: '',
    loginSucessfull: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case 'change_email':
            return { ...state, email: action.payload };
        case 'change_password':
            return { ...state, password: action.payload };
        case 'change_name':
            return { ...state, name: action.payload };
        case 'signup_sucessfull':
            return { ...state, name: '', password: '' };
        case 'signup_failed':
            return { ...state, signupError: action.payload };
        case 'login_sucessfull':
            return { ...state, name: '', password: '' };
        case 'login_failed':
            return { ...state, loginError: action.payload };
        default:
            return state;
    }
};
