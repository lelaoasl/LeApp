import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FrmLogin from './components/FrmLogin';
import FrmSignup from './components/FrmSignup';

export default props => (
    <Router>
        <Scene key="frmlogin" component={FrmLogin} title="Login" />
        <Scene key="frmsignup" component={FrmSignup} title="Signup" />
    </Router>

);
