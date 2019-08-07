import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FrmLogin from './components/FrmLogin';
import FrmSignup from './components/FrmSignup';
import Welcome from './components/Welcome';

export default props => (
    <Router>
        <Scene key="frmlogin" component={FrmLogin} title="Login" hideNavBar />
        <Scene key="frmsignup" component={FrmSignup} title="Signup" hideNavBar />
        <Scene key="welcome" component={Welcome} title="Welcome" hideNavBar={false} />
    </Router>

);
