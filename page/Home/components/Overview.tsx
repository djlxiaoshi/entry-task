import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { connect } from 'react-redux';
import { changeChannelSelect, changeTimeSelect } from '../store/actionCreators';


interface Props {
    channelName: string,
    time: string,
    count: number,
    dispatch: (action: object) => {}
}
class Overview extends Component<Props>{

    clear = () => {
        const channelAction = changeChannelSelect('all');
        const timeAction = changeTimeSelect('anytime');
        this.props.dispatch(channelAction);
        this.props.dispatch(timeAction);

        // todo 发送请求
    };
    render () {
        const { channelName, time, count } = this.props;
        return (
            <View style={ styles.container }>
                <View style={ styles.resultTop }>
                    <Text style={styles.resultCount}>{ count } Results</Text>
                    <Text style={ styles.clearBtn } onPress={ this.clear }>CLEAR SEARCH</Text>
                </View>
                <Text style={ styles.resultDesc }>Searched for { channelName } Activities from { time } </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 27,
        paddingRight: 12,
        paddingTop: 12,
        paddingBottom: 27,
        height: 68,
        backgroundColor: '#FAF9FC'
    },
    resultTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    resultCount: {
        color: '#8560A9',
        fontSize: 16,
        fontWeight: 'bold'
    },
    clearBtn: {
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight: 9,
        paddingBottom: 5,
        overflow: 'hidden',
        backgroundColor: '#D5EF7F',
        borderRadius: 12,
        color: '#67616D',
        fontSize: 10
    },
    resultDesc: {
        marginTop: 6,
        fontSize: 12,
        color: '#67616D'
    }
});

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Overview);