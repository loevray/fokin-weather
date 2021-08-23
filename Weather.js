import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Clouds: {
        iconName:"weather-cloudy",
        gradient: ["#4DA0b0", "#D39D38"]
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"]
    },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"]
    },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
}
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons
            size={96} 
            name={weatherOptions[condition].iconName}
            color="white"
            />
            <Text style={styles.temp}>
            {temp}℃
            </Text>
        </View>
        <View style={styles.halfContainer}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.subtitle}>Subtitle</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number,
    condition: PropTypes.oneOf(
        ["Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze", 
        "Mist", 
        "Dust"])
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight:  "300",
        marginBottom: 10
    },
    subtitle:{
        color: "white",
        fontWeight: "600",
        fontSize: 24   
    }
});