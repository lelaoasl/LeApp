import React from 'react';
import { Text, View } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#03a657' }}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hi</Text>
            <Text>{props.emailLogged}</Text>
        </View>
    </View>
);
