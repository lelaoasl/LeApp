import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { 
    CHANGE_EMAIL, 
    CHANGE_PASSWORD, 
    CHANGE_NAME, 
    SIGNUP_SUCESSFULL, 
    SIGNUP_FAILED, 
    LOGIN_SUCESSFULL, 
    LOGIN_FAILED 
} from './types';

export const changeEmail = (text) => {
    return {
        type: CHANGE_EMAIL,
        payload: text
    };
};

export const changePassword = (text) => {
    return {
        type: CHANGE_PASSWORD,
        payload: text
    };
};

export const changeName = (text) => {
    return {
        type: CHANGE_NAME,
        payload: text
    };
};

export const authenticateUser = ({ email, password }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(value => loginSucessfull(value, dispatch))
            .catch(error=> loginFailed(error, dispatch));
    };
};

export const signUser = ({ name, email, password }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                let emailB64 = b64.encode(email);
               
                firebase.database().ref(`/contacts/${emailB64}`)
                .push({ name })
                .then(value => signUpSucessfull(user, dispatch));
            })
            .catch(error => signUpFailed(error, dispatch));
    };
};


const signUpSucessfull = (user, dispatch) => {
    dispatch({ type: SIGNUP_SUCESSFULL });

    Actions.welcome({ emailLogged: user.user.email });
};

const signUpFailed = (error, dispatch) => {
    dispatch({ type: SIGNUP_FAILED, payload: error.message });
};

const loginSucessfull = (value, dispatch) => {
    dispatch({ type: LOGIN_SUCESSFULL });

    Actions.main({ emailLogged: value.user.email });
};

const loginFailed = (error, dispatch) => {
    dispatch({ type: LOGIN_FAILED, payload: error.message });
};
