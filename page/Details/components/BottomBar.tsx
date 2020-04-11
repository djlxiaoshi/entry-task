import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createChangeReplyModeAction, createReplyItemAction } from '../store/actionCreators';

interface Props {
    like: boolean,
    going: boolean,
    isReplyMode: boolean,
    [property:string]: any
}

interface State {
}

class BottomBar extends Component<Props, State> {

    constructor(props) {
        super(props);
    }


    toggleJoin = () => {
        console.log('i am joining')
    };

    toggleBottomBar = (status) => {
       const action = createChangeReplyModeAction(status);
        this.props.dispatch(action);

        if (!status) {
           this.props.dispatch(createReplyItemAction(null));
       }
    };

    render () {
        const { like, going, replyItem, isReplyMode } = this.props;
        return (
            <View style={ styles.container }>
                {isReplyMode || replyItem?
                    <View style={styles.buttonWrap}>
                        <View style={[styles.left, {
                            flexDirection: 'row',
                            flex: 4,
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }]}>
                            <FeatherIcon
                                onPress={ () => this.toggleBottomBar(false) }
                                style={{marginLeft: 10}}
                                name={'x'}
                                size={24}
                                color="#D5EF7F"
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholderTextColor={ '#D3C1E5' }
                                placeholder={ replyItem ? `@${replyItem.username}` : '' }/>
                        </View>
                        <View style={[styles.right, {flex: 1}]}>
                            <Ionicons
                                color={'#453257'}
                                name={'md-send'}
                                size={28}
                            />
                        </View>
                    </View> :
                    <View style={styles.buttonWrap}>
                        <View style={styles.left}>
                            <FontAwesomeIcon
                                onPress={ () => this.toggleBottomBar(true) }
                                color={'#453257'}
                                name={'commenting-o'}
                                size={24}
                            />
                            <FontAwesomeIcon
                                color={like ? '#D5EF7F' :'#453257'}
                                name={'heart-o'}
                                size={24}
                            />
                        </View>
                        <View style={styles.right}>
                            <AntDesignIcon
                                onPress={this.toggleJoin}
                                name={'check'}
                                size={24}
                                color={'#AC8EC9'}
                            />
                            <Text style={styles.joinText}>
                                { going ? 'I am going': 'Join'}
                            </Text>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 56
    },
    buttonWrap: {
        flexDirection: 'row',
        height: '100%'
    },
    left: {
        flex: 3,
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#8560A9'
    },
    right: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#D5EF7F'
    },
    joinText: {
        marginLeft: 12,
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

const mapStateToProps = (state) => ({
    replyItem: state.details.replyItem,
    isReplyMode: state.details.isReplyMode
});

export default connect(mapStateToProps)(BottomBar);