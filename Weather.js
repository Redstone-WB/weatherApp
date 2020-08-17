import React from "react"
import PropTypes from "prop-types"
import {View, Text, StyleSheet, StatusBar} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'


const weatherOptions = {
    Rain : {
        iconName: "weather-rainy",
        graident : ['#16222A', '#3A6073'],
        title : "Rainy Day",
        subtitle : "Take your flip-flops!"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient : ['#085078', '#85D8CE'],
        title : "Thunderstorm is outside",
        subtitle : "Be Careful!"
    },
    Clouds : {
        iconName: "weather-cloudy",
        gradient : ['#1F1C2C', '#928DAB'],
        title : "Cloudy",
        subtitle : "It is a common day"
    },
    Drizzle : {
        iconName: "weather-hail",
        gradient : ['#1F1C2C', '#928DAB'],
        title : "Drizzle",
        subtitle : "Drizzle"
    },
    Clear : {
        iconName: "weather-sunny",
        gradient : ['#f2709c', '#ff9472'],
        title : "It's Sunny Right Now",
        subtitle : "Enjoy your day dude!"
    },
    Mist : {
        iconName: "weather-fog",
        gradient : ['#4b6cb7', '#182848'],
        title : "Foggy",
        subtitle : "Do not drive!"
    },
    Haze : {
        iconName : "weather-fog",
        gradient : ['#616161', '#9bc5c3'],
        title : "Haze",
        subtitle : "비도 오고 그래서"
    }

}


export default function Weather({temp, conditions}){
    console.log(temp, conditions)
    return(
            <LinearGradient
                // Button Linear Gradient
                colors={weatherOptions[conditions].gradient}
                style={styles.container}>
                <StatusBar barStyle = "light-content"/>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[conditions].iconName} size={80} color="white" />
                    <Text style={styles.temp}>{temp}</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[conditions].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[conditions].subtitle}</Text>
                </View>
            </LinearGradient>

    )
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOf(["Thunderstorm", "Drizzle",
    "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Mist", "Haze", "Dust"]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    halfContainer : {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp : {
        fontSize : 30,
        color : "white"
    },
    title : {
        color : "white",
        fontSize: 34,
        fontWeight: "300",
        marginBottom : 10
    },
    subtitle : {
        color : "white",
        fontWeight : "600",
        fontSize : 24
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-start"

    }

})