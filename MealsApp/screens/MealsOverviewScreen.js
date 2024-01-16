import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({ title: categoryTitle }); // 제목 setting
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
