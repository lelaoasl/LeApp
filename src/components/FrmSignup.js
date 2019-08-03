import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './Logo';

import { Actions } from 'react-native-router-flux'

import { 
    changeEmail, 
    changePassword, 
    changeName, 
    signupUser 
} from '../actions/AutenticacaoActions';

import { 
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class frmSignup extends Component {

    _signupUser() {

        const name = this.props.name;
        const email = this.props.email;
        const password = this.props.password;

        this.props.signupUser({ name, email, password })
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <StatusBar 
                    backgroundColor="#360b0b"
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
                    placeholderTextColor="#c1b8b8" 
                    placeholder="Password"onChangeText={text => this.props.changePassword(text)} 
                    style={styles.inputText} 
                />
                <TouchableOpacity onPress={() => this._signupUser()} style={styles.button}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>

                <Text style={{ color: '#c1b8b8'}}>Already an user?</Text>
                <TouchableHighlight onPress={() => Actions.frmlogin() } >
                    <Text style={{ color: "#ffffff"}}>Sign in</Text>        
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#551111"
    },
    inputText: {
        width: 300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal: 16,
        fontSize:16,
        marginVertical: 10
    },
    button: {
        width: 300,
        borderRadius: 25,
        backgroundColor:'#360b0b',
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});


const mapStateToProps = state =>  {

    return(
    {
        name: state.AutenticacaoReducer.name,
        email: state.AutenticacaoReducer.email,
        password: state.AutenticacaoReducer.password
    }
)
}

export default connect(mapStateToProps, { changeEmail, changePassword, changeName, signupUser })(frmSignup)
