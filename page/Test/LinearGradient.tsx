import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
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

                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
                    <Text
                        style={{
                            backgroundColor: 'transparent',
                            fontSize: 15,
                            color: '#fff',
                        }}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});

export default Test;