import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}>
                    <Marker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}>
                        <View style={{backgroundColor: "red", padding: 10}}>
                            <Text>SF</Text>
                        </View>
                    </Marker>
                    </MapView>
                    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: 100,
    },
});
