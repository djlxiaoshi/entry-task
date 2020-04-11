import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import Constants  from 'expo-constants';

const timeGroup = [
    { label: 'ANYTIME', value: 'anytime' },
    { label: 'TODAY', value: 'today' },
    { label: 'TOMORROW', value: 'tomorrow' },
    { label: 'THIS WEEK', value: 'week' },
    { label: 'THIS MONTH', value: 'month' },
    { label: 'LATER', value: 'later' },
];

const channelGroup = [
    { label: 'ALL', value: 'all' },
    { label: 'CHANNEL1', value: 'channel1' },
    { label: 'CHANNEL2', value: 'channel2' },
    { label: 'CHANNEL3', value: 'channel3' },
    { label: 'CHANNEL4', value: 'channel4' },
    { label: 'CHANNEL5', value: 'channel5' }
];

interface Props {
    dispatch?: (action: object) => {}
}

interface State {
    channelValue: string,
    startTime: string,
    endTime: string,
    singleTime: string
}

class SideBar extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            channelValue: '',
            startTime: '',
            endTime: '',
            singleTime: ''
        }
    }

    search = () => {
        const { singleTime, channelValue } = this.state;
    };

    setSingleTime (item) {
        this.setState({
            singleTime: item.value
        })
    }

    setEndTime = (date) => {
        this.setState({
            endTime: date
        });
    };

    setStartTime = (date) => {
        this.setState({
            startTime: date
        });
    };

    selectChannel (item) {
        this.setState({
            channelValue: item.value
        })
    }

    render () {
        const { singleTime, startTime, endTime, channelValue } = this.state;
        const statusBarHeight = Constants.statusBarHeight;

        return(
            <View style={ [styles.container, { marginTop: statusBarHeight }] }>
                <View style={ styles.body }>
                    <View style={ styles.timeSelector }>
                        <View style={ styles.titleWrap }>
                            <Text style={styles.selectorTitle}>
                                DATE
                            </Text>
                        </View>
                        <View style={ styles.selectorContent }>
                            {
                                timeGroup.map((item) => (
                                    <Text
                                        key={item.value}
                                        style={ [styles.selectItem, singleTime === item.value ? styles.activeItem : {}] }
                                        onPress={ this.setSingleTime.bind(this, item) }>
                                        { item.label }
                                    </Text>
                                ))
                            }
                            {
                                singleTime === 'later' ?
                                    <View style={ styles.timeValueWrap }>
                                        <View style={ styles.timeInputWrap }>
                                            <DatePicker
                                                style={{ width: 100, height: 0 }}
                                                date={ startTime }
                                                mode="date"
                                                format="YYYY/MM/DD"
                                                confirmBtnText="确认"
                                                cancelBtnText="取消"
                                                iconComponent={ <View /> }
                                                customStyles={{
                                                    dateInput: {
                                                        position: 'absolute',
                                                        top: -8,
                                                        height: 'auto',
                                                        borderWidth: 0
                                                    }
                                                }}
                                                onDateChange={(date) => {this.setStartTime(date)}}
                                            />
                                        </View>
                                        <Text style={{ color: '#D5EF7F' }}>-</Text>
                                        <View style={ styles.timeInputWrap }>
                                            <DatePicker
                                                style={{ width: 100, height: 0 }}
                                                date={ endTime }
                                                mode="date"
                                                format="YYYY/MM/DD"
                                                confirmBtnText="确认"
                                                cancelBtnText="取消"
                                                iconComponent={ <View/> }
                                                customStyles={{
                                                    dateInput: {
                                                        position: 'absolute',
                                                        top: -8,
                                                        height: 'auto',
                                                        borderWidth: 0
                                                    }
                                                }}
                                                onDateChange={(date) => { this.setEndTime(date) }}
                                            />
                                        </View>
                                    </View> : null
                            }

                        </View>
                    </View>
                    <View style={ styles.channelSelector }>
                        <View style={ styles.titleWrap }>
                            <Text style={ styles.selectorTitle }>
                                CHANNEL
                            </Text>
                        </View>
                        <View style={ styles.selectorContent }>
                            {
                                channelGroup.map(item => (
                                    <Text
                                        onPress={ this.selectChannel.bind(this, item) }
                                        style={ [styles.channelItem, channelValue === item.value ? styles.activeItem : {}] }
                                        key={ item.value }>
                                        { item.label }
                                    </Text>
                                ))
                            }
                            {/*<SegmentedControlIOS*/}
                                {/*values={['One', 'Two']}*/}
                                {/*selectedIndex={1}*/}
                                {/*onChange={event => {*/}
                                    {/*this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});*/}
                                {/*}}*/}
                            {/*/>*/}
                        </View>
                    </View>
                </View>
                < View style={ styles.footer }>
                    <Button
                        onPress={ this.search }
                        title={'SEARCH'}
                        buttonStyle={{ backgroundColor: '#BABABA', height: '100%' }}
                        titleStyle={{ color: '#666', fontSize: 16, marginLeft: 6 }}
                        icon={
                            <Icon
                                underlayColor={'transparent'}
                                name='search'
                                size={20}
                                iconStyle={{ marginTop: 3 }}
                                color="#666"
                            />
                        }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    body: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: '#453257'
    },
    timeSelector: {

    },
    channelSelector: {
        marginTop: 24
    },
    titleWrap: {
        alignItems: 'center'
    },
    selectorTitle: {
        paddingTop: 10,
        marginBottom: 10,
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderBottomColor: '#8560A9',
        color: '#AC8EC9',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    channelTitle: {
      width: 100
    },
    selectorContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
    },
    selectItem: {
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 13,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        overflow: 'hidden'
    },
    activeItem: {
        backgroundColor: '#E5F7A9',
        color: '#453257'
    },
    timeValueWrap: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 0,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: 208,
        backgroundColor: '#fff'
    },
    timeInputWrap: {

    },
    channelItem: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 11.5,
        paddingRight: 11.5,
        marginLeft: 6,
        marginRight: 6,
        marginBottom: 9,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#D3C1E5',
        fontSize: 12,
        color: '#fff',
        overflow: 'hidden'
    },
    footer: {
        height: 64,
        justifyContent: 'center',
        backgroundColor: '#BABABA'
    },
    searchBtn: {
        color: '#666666'
    }
});

const mapStateToProps = (state) => ({
    timeValue: state.home.timeValue,
    channelValue: state.home.channelValue
});

export default connect(mapStateToProps)(SideBar);