import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

interface State {
}
class Test extends Component<any, State> {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render () {
        const { height } = Dimensions.get('window');

        return (
            <View style={ [ styles.container, { height } ] }>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});

export default Test;