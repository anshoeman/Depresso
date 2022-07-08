import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, Card, Avatar } from "react-native-elements";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function Menu({ navigation }) {
    const bell = "bell"
    const music = "music"
    const message = "comments"
    const size = 25
    const color = '#E3249D'
    
    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={styles.iconCOntainer}>
                <Pressable onPress={() => navigation.navigate('notifications')}>
                    <FontAwesome name={bell} size={size} color={color} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('music')}>
                    <FontAwesome name={music} size={size} color={color} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('messages')}>
                    <FontAwesome name={message} size={size} color={color} />
                </Pressable>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer : {
        height : 60,
        borderRadius : 17,
        width : '100%',
        marginTop : 45,
        margin: 0
    },
    iconCOntainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
    },
}) 