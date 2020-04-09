import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { createReplyItemAction } from '../store/actionCreators';

interface Props {
    data: any[];
    dispatch: (action: object) => {}
}
class Comment extends Component<Props> {
    constructor(props) {
        super(props);

    }

    reply = (comment) => {
        const action = createReplyItemAction(comment);
        this.props.dispatch(action);
    };

    render () {
        const { data } = this.props;

        return (
            <View style={ styles.container }>
                <View style={ styles.list }>
                    {
                        data.map((item, index) => (
                            <View style={ styles.item } key={ index }>
                                <Image style={ styles.avatar } source={ require('../../../assets/login-logo.jpg') }/>
                                <View style={ styles.main }>
                                    <View style={ styles.header }>
                                        <Text style={ styles.username }>{ item.username }</Text>
                                        <Text style={ styles.publishTime }>{ item.commentTime }</Text>
                                        <EntypoIcon
                                            onPress={ () => { this.reply(item) } }
                                            style={ styles.replyIcon }
                                            name={ 'reply' }
                                            size={ 16 }
                                            color={ '#D5EF7F' }/>
                                    </View>
                                    <View style={ styles.body }>
                                        <Text style={ styles.content }>{ item.content }</Text>
                                    </View>
                                </View>
                            </View>
                        ))
                    }

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
        marginLeft: 'auto'
    },
    body: {

    },
    content: {
        fontSize: 14,
        color: '#67616D'
    }
});

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Comment);