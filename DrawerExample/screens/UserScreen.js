import { View, Text, Button } from "react-native";

export default function UserScreen({ navigation }) {
  function openDrawerHandler() {
    navigation.toggleDrawer(); // drawer 버튼으로 여는 방법
  }

  return (
    <View>
      <Text>UserScreen</Text>
      <Button title="open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}
