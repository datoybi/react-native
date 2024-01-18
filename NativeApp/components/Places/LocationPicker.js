import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/color";
import OutlinedButton from "../UI/OutlinedButton";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";

function LocationPicker() {
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

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
    console.log(JSON.stringify(location, null, "\t"));
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
