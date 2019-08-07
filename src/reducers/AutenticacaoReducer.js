const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    signupError: '',
    signup_sucessfull: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if (action.type === 'change_email') {
        return { ...state, email: action.payload };
    }
    if (action.type === 'change_password') {
        return { ...state, password: action.payload };
    }
    if (action.type === 'change_name') {
        return { ...state, name: action.payload };
    }
    if (action.type === 'signup_sucessfull') {
        return { ...state, email: action.payload };
    }
    if (action.type === 'signup_error') {
        return { ...state, signupError: action.payload };
    }
    return state;   
};
