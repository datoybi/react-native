import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hazy",
        gradient: "['red', 'blue']"
    },
    Drizzle: {
        iconName: "weather-rainy",
        color: "['rgba(0,0,0,0.8)', 'transparent']"
    },
    Rain: {
        iconName: "weather-pouring",
        color: "['rgba(0,0,0,0.8)', 'transparent']"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        color: "['rgba(0,0,0,0.8)', 'transparent']"
    },
    Atmosphere: {
        iconName: "weather-cloudy",
        color: "['rgba(0,0,0,0.8)', 'transparent']"

    },
    Clear: {
        iconName: "weather-sunny",
        color: "['rgba(0,0,0,0.8)', 'transparent']"
    },
    Clouds: {
        iconName: "weather-cloudy",
        color: "['rgba(0,0,0,0.8)', 'transparent']"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: "['red', 'blue']"
    },
    dust: {
        iconName: "weather-fog",
        color: "['rgba(0,0,0,0.8)', 'transparent']"
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
        "dust"
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