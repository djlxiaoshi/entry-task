import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

interface Props {
    channel: string,
    title: string,
    username: string,
    publish: string,
    avatar: string
}
class Overview extends Component<Props> {
    render () {
        const { channel, title, username, publish, avatar } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.tagText }>
                    { channel }
                </Text>
                <Text style={ styles.title }>
                    { title }
                </Text>
                <View style={ styles.avatarWap }>
                    <Image
                        style={ styles.avatar }
                        source={ require('../../../assets/icon.png') }
                    />
                    <View>
                        <Text style={ styles.username }>{ username }</Text>
                        <Text style={ styles.publish }>{ publish }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    tagText: {
        alignSelf: 'flex-start',
        paddingLeft: 8,
        paddingTop: 2,
        paddingRight: 8,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#D3C1E5',
        borderRadius: 10,
        fontSize: 12,
        color: '#8560A9'
    },
    title: {
        marginTop: 12,
        fontSize: 20,
        color: '#453257'
    },
    avatarWap: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        marginRight: 12,
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#666'
    },
    username: {
        fontSize: 14,
        color: '#67616D'
    },
    publish: {
        marginTop: 4,
        fontSize: 12,
        color: '#BABABA'
    }
});

export default Overview;