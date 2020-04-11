import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { toggleSidebarStatus } from './store/actionCreators';
import Header from './components/Header';
import Overview from './components/Overview';
import DataList from './components/List';
import SideBar from './components/SideBar';

const overviewProps = {
    channelName: 'channel1',
    time: '20/06 to 24/06',
    count: 16
};

const ListProps = [
    {username: 'Devin', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: true, liked: false },
    {username: 'Dan', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: false, liked: true },
    {username: 'Dominic', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: false, liked: false },
    {username: 'Jackson', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: true, liked: true },
    {username: 'James', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: false, liked: true }
];

interface Props {
    sidebarStatus: boolean,
    dispatch: (action: object) => {}
}
class List extends Component<Props> {

    sidebarStatusChange = (status) => {
        const action = toggleSidebarStatus(status);
        this.props.dispatch(action);
    };

    render () {
        const { height } = Dimensions.get('window');
        const { sidebarStatus } = this.props;
        return (
                <SideMenu
                    onChange={ this.sidebarStatusChange }
                    isOpen={ sidebarStatus }
                    openMenuOffset={ 240 }
                    menuPosition={'left'}
                    menu={ <SideBar />  }>
                    <View style={ [styles.container, { height }] }>
                        <Header />
                        <Overview {...overviewProps}/>
                        <DataList data={ ListProps }/>
                    </View>
                </SideMenu>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    }
});

const mapStateToProps = (state) => ({
    sidebarStatus: state.home.sidebarStatus
});

export default connect(mapStateToProps)(List);