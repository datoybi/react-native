import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp}) {
    return (
    <View style={styles.container}>
        <Text>{temp}</Text>
    </View>

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


/*

Weather.propTypes = {
    temp: PropTypes.number.isRequired

};
*/

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems: "center"
    }

})