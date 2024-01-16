import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealCtx.ids.includes(meal.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
