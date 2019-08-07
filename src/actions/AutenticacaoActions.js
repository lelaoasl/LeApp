import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const changeEmail = (text) => {
    return {
        type: 'change_email',
        payload: text
    };
};

export const changePassword = (text) => {
    return {
        type: 'change_password',
        payload: text
    };
};

export const changeName = (text) => {
    return {
        type: 'change_name',
        payload: text
    };
};

export const signUser = ({ name, email, password }) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                let emailB64 = b64.encode(email);
               
                firebase.database().ref(`/contacts/${emailB64}`)
                .push({ name })
                .then(value => signUpSucessfull(dispatch));
            })
            .catch(error => signUpFailed(error, dispatch));
    };
};


const signUpSucessfull = (dispatch) => {
    dispatch({ type: 'signup_sucessfull' });



    Actions.welcome();
};

const signUpFailed = (error, dispatch) => {
    dispatch({ type: 'signup_error', payload: error.message });
};
