import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';

interface Props {
    likes: number,
    going: number,
    past: number,
    onTabChange?: any
}

interface State {
    activeTab: string,
    activeTextColor: string
}
class IconBar extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'likes',
            activeTextColor: '#BABABA'
        }
    }

    tabChange (tabName) {
        const { onTabChange } = this.props;
        const { activeTextColor } = this.state;
        this.setState({
            activeTab: tabName,
            activeTextColor: activeTextColor === tabName ? '' : '#BABABA'
        });
        if (onTabChange) {
            onTabChange(tabName);
        }
    }

    render () {
        const { likes, going, past } = this.props;
        const { activeTab, activeTextColor } = this.state;
        return (
            <View style={ styles.container }>
                <TouchableWithoutFeedback onPress={this.tabChange.bind(this, 'likes')}>
                    <View style={[ styles.item, styles.like ]}>
                        <AntDesignIcon name={ 'heart' } size={ 15 } color={ activeTab === 'likes' ? '#AECB4F' : '#BABABA' } style={{ marginRight: 8 }}/>
                        <Text style={ [styles.normalText, { color: activeTab === 'likes' ? '#AECB4F' : '#BABABA' }] }>{ likes } Likes</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.tabChange.bind(this, 'going')}>
                    <View style={[ styles.item, styles.visit ]}>
                        <EntypoIcon name={ 'check' } size={ 15 } color={ activeTab === 'going' ? '#AECB4F': '#BABABA' } style={{ marginRight: 8 }}/>
                        <Text style={ [styles.normalText, { color: activeTab === 'going' ? '#AECB4F' : '#BABABA' }] }>{ going } Going</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.tabChange.bind(this, 'past')}>
                    <View style={[ styles.item, styles.footprint ]}>
                        <FoundationIcon name={ 'foot' } size={ 17 } color={ activeTab === 'past' ? '#AECB4F': '#BABABA' } style={{ marginRight: 8 }}/>
                        <Text style={ [styles.normalText, { color: activeTab === 'past' ? '#AECB4F' : '#BABABA' }] }>{ past } Past</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 14,
        paddingBottom: 14,
        borderColor:'#E8E8E8',
        borderTopWidth: 1,
        borderBottomWidth: 1

    },
    item: {
        flexDirection: 'row',
        paddingRight: 16,
        paddingLeft: 16,
        borderRightColor: '#E8E8E8',
        borderRightWidth: 1
    },
    like: {

    },
    visit:{

    },
    footprint: {
        borderRightWidth: 0
    },
    activeText: {
        color: '#AECB4F'
    },
    normalText : {
        color: '#8C8C8C',
        fontSize: 12
    }
});

export default IconBar;