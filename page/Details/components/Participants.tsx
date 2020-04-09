import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface Props {
    goingMembers: any[];
    likeMembers: any[];
}

interface State {
    showMoreGoingMembers: boolean;
    showMoreLikeMembers: boolean;
}
class Participants extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state= {
            showMoreGoingMembers: false,
            showMoreLikeMembers: false
        };
    }

    showAllGoingMembers = () => {
        const { showMoreGoingMembers } = this.state;
        this.setState({
            showMoreGoingMembers: !showMoreGoingMembers
        })
    };

    showAllLikeMembers = () => {
        const { showMoreLikeMembers } = this.state;
        this.setState({
            showMoreLikeMembers: !showMoreLikeMembers
        })
    };

    render () {
        const { goingMembers, likeMembers } = this.props;
        const { showMoreGoingMembers, showMoreLikeMembers } = this.state;
        const minNumber = 7;
        const showMoreGoingMembersButton = goingMembers.length > minNumber;
        const showMoreLikeMembersButton = likeMembers.length > minNumber;
        const partialGoingMembers = showMoreGoingMembers ? goingMembers.slice() : goingMembers.slice(0, minNumber);
        const partialLikeMembers = showMoreLikeMembers ? likeMembers.slice() : likeMembers.slice(0, minNumber);
        return (
            <View style={ styles.container }>
                <View style={ styles.goingWrap }>
                    <AntDesignIcon
                        onPress={ this.showAllGoingMembers }
                        name={'check'}
                        size={ 15 }
                        color={'#AC8EC9'}/>
                    <Text style={ styles.text }>{ goingMembers.length } going</Text>
                    <View style={ [styles.memberWrap, {
                    }] }>
                        {
                            partialGoingMembers.map((member, index) => (
                                <View style={ styles.member } key={index}>
                                    <Image
                                        key={ index }
                                        style={ styles.avatar }
                                        source={ require('../images/gmap.png') }
                                    />
                                </View>
                            ))
                        }
                    </View>
                    {
                        showMoreGoingMembersButton && !showMoreGoingMembers ?
                            <AntDesignIcon
                                onPress={ this.showAllGoingMembers }
                                name={'downcircleo'}
                                size={ 24 }
                                color={'#AC8EC9'}/>
                            : null
                    }
                </View>

                <View style={ styles.likesWrap }>
                    <AntDesignIcon
                        onPress={ this.showAllGoingMembers }
                        name={'hearto'}
                        size={ 13 }
                        color={'#AC8EC9'}/>
                    <Text style={ styles.text }>{ likeMembers.length } likes</Text>
                    <View style={ styles.memberWrap }>
                        {
                            partialLikeMembers.map((member, index) => (
                                <View style={ styles.member } key={index}>
                                    <Image
                                        key={ index }
                                        style={ styles.avatar }
                                        source={ require('../images/gmap.png') }/>
                                </View>

                            ))
                        }
                    </View>
                    {
                        showMoreLikeMembersButton && !showMoreLikeMembers ?
                            <AntDesignIcon
                                onPress={ this.showAllLikeMembers }
                                name={'downcircleo'}
                                size={ 24 }
                                color={'#AC8EC9'}/>
                            : null
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
        alignItems: 'flex-start',
        paddingTop: 12.5,
        paddingBottom: 12.5,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    likesWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 12.5,
        paddingBottom: 12.5
    },
    text: {
        marginLeft: 6,
        fontSize:12,
        color: '#67616D'
    },
    memberWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: 13.5,
    },
    member: {
        width: '14%',
        alignItems: 'center',
        marginBottom: 12
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 12
    }
});

export default Participants;