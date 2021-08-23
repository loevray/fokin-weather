import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "c99f84fcf174b48e0e71a2dd3154784b";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {main :{temp}, weather} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({ isLoading: false, condition: weather[0].main, temp });
  }
  getLocation = async() => {
    try {
      Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error){
      Alert.alert("Can't find you.", "So sadd");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}