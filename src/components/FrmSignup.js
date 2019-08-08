import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { 
    changeEmail, 
    changePassword, 
    changeName, 
    signUser 
} from '../actions/AutenticacaoActions';


class frmSignup extends Component {
    signupUser() {
        const { name, email, password } = this.props;

        this.props.signUser({ name, email, password });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50, color: 'white' }}>LeApp</Text>
                <StatusBar 
                    backgroundColor="#037e57"
                    barStyle="light-content"
                />
                <TextInput
                    value={this.props.name} 
                    placeholderTextColor="#c1b8b8" 
                    placeholder="Name" onChangeText={text => this.props.changeName(text)}  
                    style={styles.inputText} 
                />
                <TextInput 
                    value={this.props.email} 
                    placeholderTextColor="#c1b8b8" 
                    placeholder="Email" onChangeText={text => this.props.changeEmail(text)} 
                    style={styles.inputText} 
                />
                <TextInput 
                    value={this.props.password}
                    secureTextEntry
                    placeholderTextColor="#c1b8b8" 
                    placeholder="Password"onChangeText={text => this.props.changePassword(text)} 
                    style={styles.inputText} 
                />
                <TouchableHighlight onPress={() => this.signupUser()} style={styles.button}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableHighlight>

                <Text style={{ color: '#D8000C' }}>{this.props.signupError}</Text>

                <Text style={{ color: '#c1b8b8' }}>Already an user?</Text>
                <TouchableHighlight onPress={() => Actions.frmlogin()} >
                    <Text style={{ color: '#ffffff' }}>Sign in</Text>        
                </TouchableHighlight>
            </View>
        );
    }
}

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


const mapStateToProps = state => {
    return (
        {
            name: state.AutenticacaoReducer.name,
            email: state.AutenticacaoReducer.email,
            password: state.AutenticacaoReducer.password,
            signupError: state.AutenticacaoReducer.signupError
        }
    );
};

export default connect(
    mapStateToProps, 
    { 
        changeEmail, 
        changePassword, 
        changeName, 
        signUser 
    }
)(frmSignup);
