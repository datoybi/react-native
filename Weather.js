import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#360033", "#0b8793"],
        title: "Thunderstorm",
        subtitle: "A violent short-lived weather"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#F3904F", "#3B4371"],
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#8e9eab", "#514A9D"],
        title: "Drizzle",
        subtitle: "light rain falling in very fine drops."
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#283048", "#859398"],
        title: "It is rainny",
        subtitle: "Don't forget to keep your umbrella"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#E6DADA", "#274046"],
        title: "It is snowy",
        subtitle: "Let's make a snowman"
    },
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ["#DAE2F8", "#D6A4A4"],
        title: "Atmosphere",
        subtitle: "Be Careful!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#fd1d1d", "#fcb045"],
        title: "Sunny!",
        subtitle: "Let's go outside"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2BC0E4", "#EAECC6"],
        title: "Clouds",
        subtitle: "Condensed water vapor floating in the atmosphere,"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#00416A", "#E4E5E6"],
        title: "Mist",
        subtitle: "Just like a mist"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#304352", "#d7d2cc"],
        title: "Dust",
        subtitle: "Thank you China"
    }
};

export default function Weather({temp, condition}) {
  //  condition = "Haze";
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />  
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            
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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});