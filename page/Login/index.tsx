import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Dimensions, Button } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface LoginPageState {
    username: string | ''
    password: string | ''
}
class LoginPage extends Component<any, LoginPageState> {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    inputUsername = (username) => {
        this.setState({
            username
        })
    };

    inputPassword = (password) => {
        this.setState({
            password
        })
    };

    submit = () => {
        fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            const { navigation } = this.props;
            navigation.navigate('List');
        }).catch((err) => {
            alert('密码错误');
            console.error(err);
        });
    };

    render () {
        const { height } = Dimensions.get('window');
        return (
            <KeyboardAwareScrollView>
                <View style={ [styles.loginPageContainer, { height }] }>
                    <View style={ styles.main }>
                        <ImageBackground
                            style={ styles.backgroundImg }
                            source={require('../../assets/login-background.jpg')}>
                            <View style={ styles.mask }>
                                <Text style={ styles.desc }>
                                    FIND THE MOST LOVED ACTIVITIES
                                </Text>
                                <Text style={ styles.title }>BLACK CAT!</Text>
                                <View style={ styles.logoWrap }>
                                    <Image style={ styles.logo } source={require('../../assets/login-logo.jpg')}/>
                                </View>
                                <View style={ styles.inputWrap }>
                                    <View style={ styles.customInputText }>
                                        <FontAwesomeIcon name="user-circle-o" size={13.3} color="#D3C1E5" style={ styles.inputIcon }/>
                                        <TextInput
                                            style={ styles.textInput }
                                            placeholder={'please input username'}
                                            value={ this.state.username }
                                            onChangeText={ this.inputUsername }
                                        />
                                    </View>

                                    <View style={ styles.customInputText }>
                                        <FoundationIcon name="key" size={13.3} color="#D3C1E5" style={ styles.inputIcon }/>
                                        <TextInput
                                            textContentType={ 'password' }
                                            style={ styles.textInput }
                                            placeholder={'please input password'}
                                            value={ this.state.password }
                                            onChangeText={ this.inputPassword }
                                        />
                                    </View>

                                </View>

                            </View>
                        </ImageBackground>
                    </View>


                    <View style={ styles.bottom }>
                        <Button
                            color={'#453257'}
                            title={'SIGN IN'}
                            onPress={ this.submit }
                        />
                    </View>
                </View>


            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    loginPageContainer: {
    },
    main: {
        flex: 1,
    },
    backgroundImg: {
        height: '100%',
    },
    mask: {
        height: '100%',
        backgroundColor: '#8560A9',
        opacity: 0.80
    },
    desc: {
        marginTop: 69,
        textAlign: 'center',
        fontSize: 16,
        color: '#D5EF7F'
    },
    title: {
        marginTop: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#D5EF7F'
    },
    logoWrap: {
        marginTop: 35.5,
        alignItems: 'center'
    },
    logo: {
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    linearGradient: {

    },
    inputWrap: {
        marginTop: 118,
        alignItems: 'center'
    },
    customInputText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        paddingLeft: 13.3,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D3C1E5'
    },
    inputIcon: {
        marginRight: 7.3
    },
    textInput: {
        width: 240,
        height: 40,
        color: '#453257'
    },
    bottom: {
        height: 64,
        backgroundColor: '#D5EF7F',
        justifyContent: 'center'
    }
});

export default LoginPage