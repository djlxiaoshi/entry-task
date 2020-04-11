import React, { Component } from 'react';
import {StyleSheet, View, Image, TouchableWithoutFeedback} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Constants  from 'expo-constants';
import { toggleSidebarStatus } from '../store/actionCreators';

interface Props {
    sidebarStatus?: boolean,
    dispatch?: (action: object) => {},
    [property: string]: any
}

function UserIcon () {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback  onPress={ () => { navigation.navigate('User') } }>
            <Image source={require('../../../assets/login-logo.jpg')} style={ styles.rightWrap }/>
        </TouchableWithoutFeedback>
    )
}

class Header extends Component<Props> {

    toggleSidebar = () => {
        const sidebarStatus = this.props.sidebarStatus;
        const action = toggleSidebarStatus(!sidebarStatus);
        this.props.dispatch(action);
    };

    render () {
        const statusBarHeight = Constants.statusBarHeight;

        return (
            <View style={ [styles.container, { marginTop: statusBarHeight }] }>
                <View style={ styles.leftWrap }>
                    <Icon
                        underlayColor={'transparent'}
                        name='search'
                        size={25}
                        color="#453257"
                        onPress={this.toggleSidebar}/>
                </View>
                <View style={ styles.middleWrap }>
                    <FontAwesomeIcon
                        name="certificate"
                        size={18}
                        color="#D5EF7F" />
                </View>
                <UserIcon />
            </View>
        )
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

const mapStateToProps = (state) => {
    return {
        sidebarStatus: state.home.sidebarStatus
    };
};

export default connect(mapStateToProps)(Header);