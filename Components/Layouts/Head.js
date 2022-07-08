import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, Card, Avatar } from "react-native-elements";
import Menu from "./OptionsMenu";




export default function AppBar({ user, navigation }) {
    const date = new Date();
    const hours = date.getHours();
    return (
        <View style={styles.mainContainer} >
            <Pressable onPress={() => navigation.navigate('edit')}>

            <View style={styles.avatarContainer}>
            <Avatar
            size={100}
            rounded
            source={{ uri: user?.photoURL }}
            title={user?.displayName[0]}
            containerStyle={styles.avatarStyle}
           />
           
            </View>
            </Pressable>
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
           <Menu navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        height:225,
        display: "flex",
        flexDirection: "row",
        alignItems:'center',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: '#fefefe',
    },
    avatarStyle:{
        backgroundColor: '#fff',
        borderWidth: 1,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.8,
    },
    textContainer: {
        position: 'relative',
       display: "flex",
       justifyContent: 'center',
       alignItems:'center',
       padding: 0,
       margin:0,
    },
    textStyleHeader: {
        position: 'relative',
        fontSize:25,
        fontFamily: 'Poppins-Bold',
        color : '#E3249D', 
        padding: 0,
    },
    textStyleName: {
        fontSize : 19,
        position:'relative',
        fontFamily: 'Poppins-Bold',
        color : '#E3249D',
    },
    streak : {
        paddingTop:10,
        fontSize: 14,
        opacity: 0.6,
        fontFamily : 'Poppins-Light',
    }
})