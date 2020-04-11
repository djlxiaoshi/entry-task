import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Picker, StatusBar } from 'react-native';
import DatePicker from 'react-native-datepicker'

interface State {
    date: string | ''
}
class Test extends Component<any, State> {

    constructor(props) {
        super(props);
        this.state = {
            date: '2016-05-15'
        };
    }

    render () {
        const { height } = Dimensions.get('window');

        return (
            <View style={ [ styles.container, { height } ] }>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    tagText: {
        alignSelf: 'flex-start',

        paddingLeft: 8,
        paddingTop: 2,
        paddingRight: 8,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#D3C1E5',
        borderRadius: 10,
        fontSize: 12,
        color: '#8560A9'
    }
});

export default Test;