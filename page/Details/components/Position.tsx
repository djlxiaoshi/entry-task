import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

interface Props {
    area: string,
    details: string,
    longitude?: number,
    latitude?: number,
}
class Position extends Component<Props> {
    render () {
        const { area, details } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>Where</Text>
                <Text style={ styles.name }>
                    { area }
                </Text>
                <Text style={ styles.position }>
                    { details }
                </Text>
                <Image style={ styles.image } source={ require('../images/gmap.png') } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 16,
        paddingLeft: 16
    },
    title: {
        borderLeftWidth: 2,
        borderLeftColor: '#8560A9',
        paddingLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8560A9'
    },
    name: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#67616D'
    },
    position: {
        marginTop: 4,
        marginBottom: 8,
        fontSize: 12,
        color: '#67616D'
    },
    image: {
        height: 88,
        borderRadius: 8
    }
});

export default Position;