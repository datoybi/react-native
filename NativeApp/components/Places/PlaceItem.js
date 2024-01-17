import { View, Image, Text, StyleSheet } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <View onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </View>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({});
