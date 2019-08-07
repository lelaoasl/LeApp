import React from 'react';
import { connect } from 'react-redux';

import { 
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { 
    changeEmail, 
    changePassword 
} from '../actions/AutenticacaoActions';

const frmLogin = props => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50, color: 'white' }}>LeApp</Text>
            <StatusBar 
                backgroundColor="#037e57"
                barStyle="light-content"
            />
            <TextInput 
                value={props.email} 
                placeholderTextColor="#c1b8b8" 
                placeholder="Email" onChangeText={text => props.changeEmail(text)} 
                style={styles.inputText} 
            />
            <TextInput 
                value={props.password} 
                placeholderTextColor="#c1b8b8" 
                placeholder="Password" secureTextEntry
                onChangeText={text => props.changePassword(text)} 
                style={styles.inputText} 
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={{ color: '#c1b8b8' }}>Does not have an account?</Text>
            <TouchableHighlight onPress={() => Actions.frmsignup()} >
                <Text style={{ color: '#ffffff' }}>Sign up</Text>        
            </TouchableHighlight>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#03a657'
    },
    inputText: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    },
    button: {
        width: 300,
        borderRadius: 25,
        backgroundColor: '#037e57',
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
    return: (
        {
            email: state.AutenticacaoReducer.email,
            password: state.AutenticacaoReducer.password
        }
    )
});

export default connect(mapStateToProps, { changeEmail, changePassword })(frmLogin);
