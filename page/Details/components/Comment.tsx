import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

interface Props {

}
class Comment extends Component<Props> {
    render () {

        return (
            <View style={ styles.container }>
                <View style={ styles.list }>
                    <View style={ styles.item }>
                        <Image style={ styles.avatar } source={ require('../../../assets/login-logo.jpg') }/>
                        <View style={ styles.main }>
                            <View style={ styles.header }>
                                <Text style={ styles.username }>Little Prince</Text>
                                <Text style={ styles.publishTime }>9 hours ago</Text>
                                <View style={ styles.replyIcon } />
                            </View>
                            <View style={ styles.body }>
                                <Text style={ styles.content }>Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={ styles.item }>
                        <Image style={ styles.avatar } source={ require('../../../assets/login-logo.jpg') }/>
                        <View style={ styles.main }>
                            <View style={ styles.header }>
                                <Text style={ styles.username }>Little Prince</Text>
                                <Text style={ styles.publishTime }>9 hours ago</Text>
                                <View style={ styles.replyIcon } />
                            </View>
                            <View style={ styles.body }>
                                <Text style={ styles.content }>Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={ styles.item }>
                        <Image style={ styles.avatar } source={ require('../../../assets/login-logo.jpg') }/>
                        <View style={ styles.main }>
                            <View style={ styles.header }>
                                <Text style={ styles.username }>Little Prince</Text>
                                <Text style={ styles.publishTime }>9 hours ago</Text>
                                <View style={ styles.replyIcon } />
                            </View>
                            <View style={ styles.body }>
                                <Text style={ styles.content }>Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16
    },
    list: {

    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16
    },
    avatar: {
        marginRight: 12,
        width: 32,
        height: 32,
        borderRadius: 16
    },
    main: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4
    },
    username: {
        marginRight: 12,
        fontSize: 12,
        color: '#8560A9'
    },
    publishTime: {
        fontSize: 10,
        color: '#BABABA'
    },
    replyIcon: {
        marginLeft: 'auto',
        width: 16,
        height: 13,
        backgroundColor: 'red'
    },
    body: {

    },
    content: {
        fontSize: 14,
        color: '#67616D'
    }
});

export default Comment;