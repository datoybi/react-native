import { View, Button, Alert } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";

function ImagePicker() {
  async function takeImageHandler() {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
      if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
      }

      if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
        ALert.alert("권한이 없습니다", "카메라 접근 권한을 설정해야 합니다.");
        return false;
      }

      return true;
    }

    // const image = await launchCameraAsync({ allowsEditing: true, aspect: [16, 9], quality: 0.5 });
    // console.log(image);

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
  }

  return (
    <View>
      {/* <View></View> */}
      <Button title="사진 찍기" onPress={takeImageHandler} />
    </View>
  );
}
export default ImagePicker;
