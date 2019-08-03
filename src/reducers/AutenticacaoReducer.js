const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type == 'change_email') {
        return {...state, email: action.payload}
    }
    if(action.type == 'change_password') {
        return {...state, password: action.payload}
    }
    if(action.type == 'change_name') {
        return {...state, name: action.payload}
    }
    return state;
    
}
