import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants  from 'expo-constants';
import EntypoIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function Header() {
    const navigation = useNavigation();
    const statusBarHeight = Constants.statusBarHeight;
    return (
        <View style={ [styles.container, { marginTop: statusBarHeight }] }>
            <View style={ styles.leftWrap }>
                <EntypoIcon
                    onPress={ () => { navigation.navigate('Home') } }
                    name="home"
                    size={23}
                    color="#453257"
                />
            </View>
            <View style={ styles.middleWrap }>
                <FontAwesomeIcon
                    name="certificate"
                    size={18}
                    color="#D5EF7F"
                />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('User')}>
                <Image
                    style={ styles.rightWrap }
                    source={ require('../images/gmap.png') }
                />
            </TouchableWithoutFeedback>

        </View>
    );
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