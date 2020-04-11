import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from '../../../components/ListItem';
import { ListItemProps } from '../../../types';

interface Props {
    data: Array<ListItemProps>
}

interface State {
    isFresh: boolean
}
class List extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            isFresh: false
        };
    }

    refresh = () => {
        this.setState({
            isFresh: true
        });

        setTimeout(() => {
            this.setState({
                isFresh: false
            })
        }, 2000)
    };

    getMore = () => {
        // alert(11)
    };

    render () {
        const { data } = this.props;
        const { isFresh } = this.state;

        return (
            <View style={ styles.container }>
                <FlatList
                    refreshing={ isFresh }
                    data={data}
                    keyExtractor={ item => item.username }
                    ListFooterComponent={<View style={{ height: 0, marginBottom: 10 }} />}
                    renderItem={({item}) => <ListItem  { ...item }/>}
                    onRefresh={ this.refresh }
                    onEndReached={ this.getMore }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 0,
        backgroundColor: '#fff'
    }
});

export default List;