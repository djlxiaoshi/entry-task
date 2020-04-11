import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';


interface State {
    entries: any[]
}
class Test extends Component<any, State> {

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { title: 'vdssdvsdvds' },
                { title: 'vdssdvsdvds2' },
                { title: 'vdssdvsdvds3' }
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text>{ item.title }</Text>
            </View>
        );
    };

    render () {
        const { height } = Dimensions.get('window');

        return (
            <View style={ [ styles.container, { height } ] }>
                <Carousel
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={200}
                    itemWidth={100}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    slide: {
        height: 50,
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default Test;