import { useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();

  const region = {
    latitude: 37.38,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat, lng });
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("위치 지정 실패", "위치를 먼저 지정해주세요");
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          title="위치 지정"
          coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}
        />
      )}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
