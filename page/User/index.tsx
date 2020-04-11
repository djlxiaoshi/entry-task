import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Header from './components/Header';
import UserInfo from './components/Info';
import IconBar from './components/IconBar';
import Empty from '../../components/Empty';
import List from './components/List';

const bars = {
    likes: 13,
    going: 0,
    past: 0
};

const userInfoProps = {
  username: 'djlxs',
  email: '1281233206@qq.com',
  avatar: ''
};

const listDataProps = [
    {username: 'Devin', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: true, liked: false },
    {username: 'Dan', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: false, liked: true },
    {username: 'Dominic', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: false, liked: false },
    {username: 'Jackson', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: true, liked: true },
    {username: 'James', tag: 'Channel name longer', title: 'Activity Title Name Make it Longer May ', time: '14 May 2016 - 14 May 2016', details: '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien', going: false, liked: true }
];

class UserPage extends Component {

    tabChange = (tabName) => {
       console.log(tabName);
    };

    render () {
        const { height } = Dimensions.get('window');
        return (
            <View style={ [styles.container, { height: height }] }>
                <Header />
                <UserInfo {...userInfoProps}/>
                <IconBar { ...bars } onTabChange={ this.tabChange }/>
                <List data={listDataProps}/>
                {/*<Empty style={{ flex: 1 }}></Empty>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default UserPage;