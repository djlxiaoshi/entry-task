import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    username: string,
    email: string,
    avatar: string
}
class UserInfo extends Component<Props> {
    render () {
        const { username, email, avatar } = this.props;

        return (
            <View style={ styles.container }>
                <View style={ styles.avatar }></View>
                <Text style={ styles.username }>{ username }</Text>
                <View style={ styles.email }>
                    <MaterialCommunityIcons name={ 'email-outline' } size={14} color={'#8560A9'} style={{ marginTop: 3, marginRight: 6 }}/>
                    <Text style={{ color: '#8560A9', fontSize: 14 }}>{ email }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 24,
    },
    avatar: {
        marginTop: 36,
        width: 72,
        height: 72,
        borderRadius: 36,
        borderWidth: 2,
        borderColor: '#d3c1e5'
    },
    username: {
        marginTop: 24,
        fontSize: 24,
        color: '#67616D'
    },
    email: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    }
});

export default UserInfo;
