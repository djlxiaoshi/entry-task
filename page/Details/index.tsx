import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
import Overview from './components/Overview';
import TabBar from './components/TabBar';
import Caroules from './components/Carousel';
import Description from './components/Description';
import Time from './components/Time';
import Position from './components/Position';
import Participants from './components/Participants';
import Comment from './components/Comment';
import BottomBar from './components/BottomBar';

const overviewData = {
    channel: 'Channel 1',
    title: 'Activity Title Name Make it Longer May Longer than One Line',
    username: 'username',
    publish: 'Published 2 days ago',
    avatar: ''
};

const caroulesData = [
    { name: '1' },
    { name: '2' },
    { name: '3' }
];

const contentData = '[No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi potenti. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius there is south north asim'

const timeData = {
    startTime: Date.now(),
    endTime: Date.now()
};

const positionData = {
    area: 'Marina Bay Sands',
    details: '10 Bayfront Ave, S018956'
};

const participantsData = {
    goingMembers: [
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
    ],
    likeMembers: [
        { avatar: '' },
        { avatar: '' },
        { avatar: '' },
        { avatar: '' }
    ]
};

const ListData = [
    {username: 'Devin', commentTime: '14 May 2016 - 14 May 2016', content: 'Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.' },
    {username: 'Little Prince', commentTime: '14 May 2016 - 14 May 2016', content: 'Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.' },
    {username: 'Little Prince2', commentTime: '14 May 2016 - 14 May 2016', content: 'Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.' },
    {username: 'Little Prince3', commentTime: '14 May 2016 - 14 May 2016', content: 'Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.' },
    {username: 'Little Prince4', commentTime: '14 May 2016 - 14 May 2016', content: 'Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut, rutrum varius nunc.' }
];

const bottomBarData = {
    like: true,
    going: true
};

class Details extends Component {
    render () {
        const { height } = Dimensions.get('window');
        const statusBarHeight = Constants.statusBarHeight;
        const headerHeight = 40;
        const scrollHeight = height - statusBarHeight - headerHeight;
        return (
            <View style={ styles.container }>
                <Header />
                <ScrollView style={{ height: scrollHeight }}>
                    <Overview { ...overviewData } />
                    <TabBar activeTab={ 'details' } />
                    <Caroules entries={ caroulesData }/>
                    <Description content={ contentData }/>
                    <Time { ...timeData }/>
                    <Position { ...positionData }/>
                    <Participants { ...participantsData }/>
                    <Comment data={ ListData }/>
                    <BottomBar { ...bottomBarData } />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {

   }
});

export default Details;