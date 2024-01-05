import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import * as Location from "expo-location";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "ec285709d299339b08f97c00916b05fa";
const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Show: "snow",
  Atmosphere: "cloudy-gusts",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("loading...");
  const [days, setDays] = useState({});
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    // 현재 위치 가져오기
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setOk(false);
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&exclude=alerts&units=metric`;
    console.log(url);
    const response = await fetch(url);
    // console.log("response ", response);
    const json = await response.json();
    console.log(json);
    setDays(json);
  };

  console.log(days);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator color="white" size="large" style={{ marginTop: 10 }} />
          </View>
        ) : (
          <View style={styles.day}>
            <View
              style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}
            >
              <Text style={styles.temperature}>{parseFloat(days.main.temp).toFixed(1)}</Text>
              <Fontisto name={icons[days.weather[0].main]} size={68} color="black" />
            </View>
            {/* <Text style={styles.temperature}>{parseFloat(days.main.temp).toFixed(1)}</Text> */}
            <Text style={styles.description}>{days.weather[0].main}</Text>
            <Text style={styles.tinyText}>{days.weather[0].description}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: { fontSize: 68, fontWeight: "500" },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temperature: {
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -40,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,
  },
});
