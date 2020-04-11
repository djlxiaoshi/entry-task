import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import ListItem from '../../../components/ListItem';
import Empty from '../../../components/Empty';
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
        const { height } = Dimensions.get('window');
        const emptyComponentHeight = height - 138;
        return (
            <View style={ styles.container }>
                <FlatList
                    refreshing={ isFresh }
                    onEndReachedThreshold={ 0.2 }
                    data={data}
                    keyExtractor={ item => item.username }
                    renderItem={({item}) => <ListItem  { ...item } />}
                    ListEmptyComponent={ <Empty style={{ height: emptyComponentHeight }} /> }
                    ListFooterComponent={<View style={{ height: 0, marginBottom: 10 }} />}
                    onRefresh={ this.refresh }
                    onEndReached={ this.getMore }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 0,
    },
    empty: {
    }
});

export default List;