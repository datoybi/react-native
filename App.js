import React from 'react';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import {Alert} from "react-native"
import axios from "axios" // similar with ajax

const API_KEY = "ec285709d299339b08f97c00916b05fa";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    //  console.log(data);
      this.setState({ isLoading: false, temp: data.main.temp, condition: data.weather[0].main });
  };

  /* cannot find data error - let's see after making this app -> study es6
  getWeather = async(latitude, longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      }
     } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      console.log(data);
      this.setState({
        isLoading: false, 
        condition: data.weather[0].main, 
     // condition: "Clear",
        temp
    //    temp: data.main.temp
      });
  };

*/
  getLocation = async() => {  // getting the geo information
    try {
      //throw Error();
      await Location.requestPermissionsAsync(); // getting user's permission
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync(); // getting positions(lat,lon)
      this.getWeather(latitude, longitude);
   //   this.setState({ isLoading: false });

    } catch (error) {
      Alert.alert("Can't find you." , "So sad");
    }
  }

  componentDidMount() {    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드. 이 안에서 다른 JavaScript 프레임워크를 연동하거나, setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
   return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} /> 
  }
} 