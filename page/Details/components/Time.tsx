import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';
import dayjs from 'dayjs';

interface Props {
    startTime: number | string,
    endTime: number | string
}
class Time extends Component<Props> {

    format = (time, formater) => {
        return dayjs(time).format(formater);
    };
    render () {
        const { startTime, endTime } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>When</Text>
                <View style={ styles.main }>
                    <View style={ styles.left }>
                        <Text style={ styles.dateText }>
                            { this.format(startTime, 'MM MMM YYYY') }
                        </Text>
                        <View style={ styles.timeWrap }>
                            <Text style={ styles.timeText }>
                                { this.format(startTime, 'h:mm') }
                            </Text>
                            <Text style={ styles.subText }>{ this.format(startTime, 'a') }</Text>
                        </View>
                    </View>
                    <View style={ styles.right }>
                        <Text style={ styles.dateText }>
                            { this.format(endTime, 'MM MMM YYYY') }
                        </Text>
                        <View style={ styles.timeWrap }>
                            <Text style={ styles.timeText }>
                                { this.format(endTime, 'h:mm') }
                            </Text>
                            <Text style={ styles.subText }>{ this.format(endTime, 'a') }</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 19.5,
        marginBottom: 16.5,
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8'
    },
    title: {
        borderLeftWidth: 2,
        borderLeftColor: '#8560A9',
        paddingLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8560A9'
    },
    main:{
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 32,
        paddingRight:32,
    },
    left: {
        paddingRight: 19.5,
        borderRightColor: '#E8E8E8',
        borderRightWidth: 1
    },
    right: {
        paddingLeft: 19.5
    },
    dateText: {
        fontSize: 16,
        color: '#67616D'
    },
    timeWrap: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5
    },
    timeText: {
        marginRight: 8,
        fontSize: 32,
        color: '#AECB4F',
    },
    subText: {
        marginBottom: 5,
        fontSize: 12,
        color: '#AECB4F'
    }
});

export default Time;