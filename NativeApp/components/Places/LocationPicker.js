import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "../../constants/color";
import OutlinedButton from "../UI/OutlinedButton";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { getMapPreview } from "../../util/location";
import { useNavigation } from "@react-navigation/native";

function LocationPicker() {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();

  async function verifyPermission() {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      ALert.alert("권한이 없습니다", "사용자 위치 접근 권한을 설정해야 합니다.");
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;

    const location = await getCurrentPositionAsync({});
    // console.log(JSON.stringify(location, null, "\t"));
    setPickedLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map", {});
  }

  let locationPreview = <Text>장소가 선택되지 않았습니다.</Text>;
  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          유저 위치
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          지도에서 검색하기
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
