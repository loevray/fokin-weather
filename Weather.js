import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import PropTypes, { func } from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({temp}) {
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
        <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.halfContainer}>

        </View>
    </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"])
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});