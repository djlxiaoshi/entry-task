import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface Props {
    entries: any[]
}
class CarouselComponent extends Component<Props> {

    constructor (props) {
        super(props);
        this.state = {
            entries: []
        }
    }
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image style={{width: 180, height: 100}} source={ require('../images/gmap.png') }/>
            </View>
        );
    };

    render () {
        const { entries } = this.props;
        const { width } = Dimensions.get('window');
        return (
            <View style={ styles.container }>
                <Carousel
                    data={entries}
                    activeSlideAlignment={'start'}
                    renderItem={this._renderItem}
                    sliderWidth={ width - 16 }
                    itemWidth={180}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    slide: {
        height: 100,
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default CarouselComponent;