import { View, Pressable, Text, Image, StyleSheet } from "react-native";

export default function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={{ width: "100%", height: 200 }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration}</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
