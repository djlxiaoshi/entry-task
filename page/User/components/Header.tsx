import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Constants  from 'expo-constants';

function HomeIcon () {
    const navigation = useNavigation();
    return (
        <EntypoIcon name="home" size={23} color="#453257" onPress={ () => { navigation.navigate('Home') } }/>
    );
}

class Header extends Component {
    render () {
        const statusBarHeight = Constants.statusBarHeight;

        return (
            <View style={ [styles.container, { marginTop: statusBarHeight }] }>
                <View style={ styles.leftWrap }>
                    <HomeIcon />
                </View>
                <View style={ styles.middleWrap }>
                    <FontAwesomeIcon name="certificate" size={18} color="#D5EF7F"></FontAwesomeIcon>
                </View>
                <View style={ styles.rightWrap }></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        backgroundColor: '#8560A9',
    },
    leftWrap: {
        marginLeft: 19,
    },
    middleWrap: {

    },
    rightWrap: {
        marginRight: 19,
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#fff'
    }
});

export default Header;