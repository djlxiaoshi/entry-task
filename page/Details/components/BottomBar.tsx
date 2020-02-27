import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface Props {

}
class BottomBar extends Component<Props> {
    render () {

        return (
            <View style={ styles.container }>
                <View style={ styles.buttonWrap }>
                    <View style={ styles.left }></View>
                    <View style={ styles.right }>
                        <Text style={ styles.joinText }>Join</Text>
                    </View>
                </View>


                <View style={ styles.buttonWrap }>
                    <View style={ [styles.left, {
                        flexDirection: 'row',
                        flex: 4,
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }]}>
                        <FeatherIcon
                            style={{ marginLeft: 10 }}
                            name={ 'x' }
                            size={24}
                            color="#D5EF7F"
                        />
                        <TextInput style={ styles.textInput }/>
                    </View>
                    <View style={ [styles.right, { flex: 1 }] }>
                        <Text style={ styles.joinText }>Join</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    buttonWrap: {
        flexDirection: 'row',
        height: 56
    },
    left: {
        flex: 3,
        height: '100%',
        backgroundColor: '#8560A9'
    },
    right: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#D5EF7F'
    },
    joinText: {
        fontSize: 14,
        color: '#788C36'
    },
    textInput: {
        flex: 1,
        backgroundColor: '#fff',
        height: 32,
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 14,
        paddingLeft: 16.5
    }
});

export default BottomBar;