import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    height?: number,
    style?: object
}
class Empty extends Component<Props> {
    render () {
        const { height, style } = this.props;
        return (
            <View style={[styles.container, style ]}>
                <Ionicons name={'md-basketball'} size={ 60 } color={ '#D3C1E5' }/>
                <Text style={ styles.text }>No activity found</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#BABABA',
        fontSize: 14
    }
});

export default Empty;