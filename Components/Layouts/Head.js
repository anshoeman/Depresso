import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, Card, Avatar } from "react-native-elements";



export default function AppBar({ user }) {
    const date = new Date();
    const hours = date.getHours();
    return (
        <View style={styles.mainContainer} >
            <Avatar
            size={100}
            rounded
            source={{ uri: user?.photoURL }}
            title={user?.displayName[0]}
            containerStyle={styles.avatarStyle}
           />
           <View style={styles.textContainer}>
            <Text style={styles.textStyleHeader}>
                {   
                    hours <= 17 && hours >=12 ? "Good Afternoon" : 
                    hours >=18 ? "Good Evening" : "Good Morning" 
                }
            </Text>
            <Text style={styles.textStyleName}>{user?.displayName}</Text>
            <Text style={styles.streak}>Your Current Streak is 20</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems:'center',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: '#fefefe',
        shadowColor : '#000',
        shadowOpacity: 0.8,
        shadowOffset: 10,
        elevation: 10
    },
    avatarStyle:{
        backgroundColor: '#fff',
        borderWidth: 1,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.8,
    },
    textContainer: {
       display: "flex",
       justifyContent: 'center',
       alignItems:'center',
       marginRight:15,
    },
    textStyleHeader: {
        fontSize:25,
        fontWeight: 'bold',
        paddingBottom : 3,
        color : '#E3249D'
    },
    textStyleName: {
        fontSize : 20,
        fontWeight: 'semibold',
        paddingBottom : 8,
        color : '#E3249D'
    },
    streak : {
        fontSize: 16,
        opacity: 0.6,
        fontFamily : 'Poppins',
    }
})