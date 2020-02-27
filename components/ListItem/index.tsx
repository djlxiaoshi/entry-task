import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface  ListItemProps {
    username: string,
    title: string,
    tag: string,
    time: string,
    details: string,
    going: boolean,
    liked: boolean,
    [property: string]: any
}
function ListItem ({ username, tag, title, time, details, going, liked, key }: ListItemProps) {

    const navigation = useNavigation();

    return (
        <View style={ styles.container } key={key}>
            <View style={ styles.itemHeader }>
                <Image style={ styles.avatar } source={ require('./images/login-logo.jpg') }/>
                <Text style={ styles.username }>{ username }</Text>
                <Text style={ styles.tag }>{ tag }</Text>
            </View>
            <View style={ styles.itemBody }>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={ styles.itemTitle } onPress={ () => { navigation.navigate('Details'); } }>
                            { title }
                        </Text>
                        <View style={ styles.itemTime }>
                            <IoniconsIcon
                                style={ styles.itemTimeIcon }
                                name={'md-time'}
                                size={ 12 }
                                color={'#8560A9'}
                            />
                            <Text style={ styles.itemTimeText }>{ time }</Text>
                        </View>
                    </View>
                    <Image style={ styles.thumbnail } source={ require('./images/login-logo.jpg') }/>
                </View>

                <Text style={ styles.itemDesc } numberOfLines={3}>
                    { details }
                </Text>
            </View>
            <View style={ styles.itemFooter }>
                <View style={ styles.itemVisit }>
                    <EntypoIcon
                        name={ 'check' }
                        size={ 12 }
                        color={ going ? '#AECB4F': '#AC8EC9'}
                    />
                    <Text style={ styles.itemFooterText }>I am going!</Text>
                    <EntypoIcon
                        name={ 'heart' }
                        size={ 12 }
                        color={ liked ? '#FF5C5C' : '#AC8EC9' }
                        style={{ marginLeft: 30 }}
                    />
                    <Text style={ styles.itemFooterText }>I like it</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 18,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1
    },
    itemHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemBody: {
        marginTop: 10
    },
    thumbnail: {
        width: 64,
        height: 64,
        backgroundColor: 'red'
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#453257'
    },
    itemTime: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    itemTimeIcon: {
        marginRight: 5
    },
    itemTimeText: {
        fontSize: 12,
        color: '#8560A9'
    },
    itemDesc: {
        marginTop: 12,
        fontSize: 14,
        color: '#67616D'
    },
    itemFooter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemVisit: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12
    },
    itemFooterText: {
        marginLeft: 5,
        fontSize: 12,
        color: '#453257'
    },
    itemLike: {
        flexDirection: 'row',
        marginLeft: 30
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    username: {
        marginLeft: 8,
        fontSize: 12,
        color: '#67616D'
    },
    tag: {
        paddingLeft: 10,
        paddingTop: 2,
        paddingRight: 10,
        paddingBottom: 2,
        marginLeft: 'auto',
        borderWidth: 1,
        borderColor: '#D3C1E5',
        borderRadius: 10,
        color: '#8560A9'
    }
});

export default ListItem;