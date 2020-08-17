// import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import Loading from "./Loading.js";
import {Alert} from "react-native";
import axios from "axios";

import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "041c1b827d48b19d47adf99658ff1ddc"

export default class App extends Component {
  state = {
    isLoading : true
  }

  getweather = async(latitude, longitude) => {
    const { data : {
      main : {temp},
      weather
    } } = await axios.get(
        // 왜 "나 '가 아니라 ` (back-tic) 인가?? 문자열에 변수를 포함시키기 위함임.
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    // console.log(weather)
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main})
  }

  geolocation = async() => {
    try {
      await Location.requestPermissionsAsync()
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync()

      // Send the coordinates to API, and get weather
      this.getweather(latitude, longitude)
      // this.setState({isLoading: false})

    } catch (error) {
      console.log(error)
      Alert.alert("Can't Find you!", "So Sad")
    }

  }
  componentDidMount() {
    this.geolocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} conditions={condition}/>
  }
}

