import firebase from 'firebase';

export const changeEmail =(text) => {
    return {
        type: 'change_email',
        payload: text
    }
}

export const changePassword = (text) => {
    return {
        type: 'change_password',
        payload: text
    }
}

export const changeName = (text) => {
    return {
        type: 'change_name',
        payload: text
    }
}

export const signupUser = ({ name, email, password}) => {

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch(erro => console.log(erro))
    return {
        type: 'teste'
    }
}

