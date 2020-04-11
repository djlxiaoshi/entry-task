import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native';

interface State {
    activeTab: string
}

const tabConfig = [
    {
        label: 'Details',
        value: 'details',
        icon:  (activeTab) => <AntDesignIcon name={ 'heart' } size={ 15 } color={ activeTab === 'details' ? '#AECB4F' : '#BABABA' }/>
    },
    {
        label: 'Participants',
        value: 'participants',
        icon: (activeTab) => <MaterialIcons name={ 'people' } size={ 17 } color={ activeTab === 'participants' ? '#AECB4F': '#BABABA' } />

    },
    {
        label: 'Comments',
        value: 'comments',
        icon: (activeTab) => <FontAwesomeIcon name={ 'comments' } size={ 17 } color={ activeTab === 'comments' ? '#AECB4F': '#BABABA' }/>,
        tabItemStyle: { borderRightWidth: 0 }
    }
];

class TabBar extends Component<any, State> {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'details'
        }
    }

    tabChange = (tabName) => {
        this.setState({
            activeTab: tabName
        })
    };

    render () {
        const { activeTab } = this.state;
        return (
            <View style={ styles.container }>
                {
                    tabConfig.map((tab, index) => (
                        <TouchableWithoutFeedback
                            key={ tab.value }
                            onPress={ () => { this.tabChange(tab.value) } }>
                            <View style={[ styles.tabItem, tab.tabItemStyle ]}>
                                <View style={ styles.iconStyle }>
                                    { tab.icon(activeTab) }
                                </View>
                                <Text
                                    style={ [
                                    styles.itemTextStyle,
                                    tab.value === activeTab ? styles.activeText : styles.normalText
                                ]}>
                                    { tab.label }
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        borderColor:'#E8E8E8',
        borderTopWidth: 1,
        borderBottomWidth: 1

    },
    iconStyle: {
        marginRight: 8
    },
    tabItem: {
        flexDirection: 'row',
        paddingRight: 16,
        paddingLeft: 16,
        borderRightColor: '#E8E8E8',
        borderRightWidth: 1
    },
    itemTextStyle: {
        fontSize: 12,
        color: '#8C8C8C'
    },
    activeText: {
        color: '#AECB4F'
    },
    normalText : {
        color: '#8C8C8C'
    }
});

export default TabBar;