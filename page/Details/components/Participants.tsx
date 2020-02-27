import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';

interface Props {
    goingMembers: any[];
    likeMembers: any[];
}

interface State {
    showMoreGoingMembers: boolean
}
class Participants extends Component<Props> {
    
    render () {
        const { goingMembers, likeMembers } = this.props;
        const minNumber = 7;
        const showMoreGoingMembers = goingMembers.length > minNumber;
        const showMoreLikeMembers = likeMembers.length > minNumber;
        const partialGoingMembers = goingMembers.slice(0, minNumber);
        const partialLikeMembers = likeMembers.slice(0, minNumber);
        return (
            <View style={ styles.container }>
                <View style={ styles.goingWrap }>
                    <Text style={ styles.text }>{ goingMembers.length } going</Text>
                    <View style={ [styles.memberWrap, {
                        justifyContent: showMoreGoingMembers ? 'space-around': 'flex-start'
                    }] }>
                        {
                            partialGoingMembers.map((member, index) => (
                                <Image
                                    key={ index }
                                    style={ styles.avatar }
                                    source={ require('../images/gmap.png') }
                                />
                            ))
                        }
                    </View>
                    {
                        showMoreGoingMembers ? <View style={ styles.showAll } /> : null
                    }
                </View>

                <View style={ styles.likesWrap }>
                    <Text style={ styles.text }>{ likeMembers.length } likes</Text>
                    <View style={ styles.memberWrap }>
                        {
                            partialLikeMembers.map((member, index) => (
                                <Image
                                    key={ index }
                                    style={ styles.avatar }
                                    source={ require('../images/gmap.png') }/>
                            ))
                        }
                    </View>
                    {
                        showMoreLikeMembers ? <View style={ styles.showAll } /> : null
                    }

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        marginTop: 16,
        marginBottom: 16
    },
    goingWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12.5,
        paddingBottom: 12.5,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    likesWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12.5,
        paddingBottom: 12.5
    },
    text: {
        fontSize:12,
        color: '#67616D'
    },
    memberWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 13.5,
        overflow: 'hidden'
    },
    avatar: {
        width: 24,
        height: 24,
        marginLeft: 3.5,
        marginRight: 3.5,
        borderRadius: 12
    },
    showAll: {
        width: 24,
        height: 24,
        marginLeft: 3.5,
        borderRadius: 12,
        backgroundColor: 'red'
    }
});

export default Participants;