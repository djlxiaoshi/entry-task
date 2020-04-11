import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { getListData } from '../Home/store/actionCreators';
import { connect } from 'react-redux';
interface State {
    date: string | ''
}

interface Props {
    listData: number,
    dispatch: (action: object) => {}
}
class Test extends Component<Props, State> {

    constructor(props) {
        super(props);
    }

    componentDidMount () {
        const action = getListData({ url: 'test' });
        this.props.dispatch(action);
    }

    render () {
        const { height } = Dimensions.get('window');
        const { listData } = this.props;
        return (
            <View style={ [ styles.container, { height } ] }>
                <Text>
                    { listData }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    }
});

const mapStateToProps = (state) => {
    return {
    listData: state.listData
}}
export default connect(mapStateToProps)(Test);