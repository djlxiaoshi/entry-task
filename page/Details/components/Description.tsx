import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-elements';
interface Props {
    content: string
}

interface State {
    showAll: boolean
}

class Description extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            showAll: false
        }
    }

    viewAll = () => {
        this.setState({
            showAll: true
        })
    };

    render () {
        const { content } = this.props;
        const { showAll } = this.state;

        return (
            <View style={ styles.container }>
                <Text style={ styles.content } numberOfLines={ showAll ? undefined : 6 }>
                    { content }
                </Text>

                {
                    showAll ? null :
                        <LinearGradient
                            colors={[
                                'rgba(250, 249, 252, 0)',
                                'rgba(250, 249, 252, 0.7)',
                                'rgba(250, 249, 252, 1)'
                            ]}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: 40,
                            }}
                        >
                            <Text onPress={ this.viewAll } style={ styles.button }>VIEW ALL</Text>

                        </LinearGradient>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        position: 'relative'
    },
    masking: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    content: {
        fontSize: 14,
        color: '#67616D',
        lineHeight: 20
    },
    linearGradient: {},
    button: {
        position: 'absolute',
        bottom: 0,
        right: 16,
        zIndex: 100,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 12,
        fontSize: 10,
        color: '#67616D',
        backgroundColor: '#D5EF7F'
    }
});

export default Description;