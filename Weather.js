import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#F3904F", "#3B4371"]
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#F3904F", "#3B4371"]
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#F3904F", "#3B4371"]
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#F3904F", "#3B4371"]
    },
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ["#F3904F", "#3B4371"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#F3904F", "#3B4371"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#F3904F", "#3B4371"]
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#F3904F", "#3B4371"]
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#F3904F", "#3B4371"]
    }
};

export default function Weather({temp, condition}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />  
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",  
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});