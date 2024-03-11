import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

// 리스트의 크기가 한정되어 있기 때문에 FlatList를 사용할 필요는 없다. - ScrollView를 이용해도 된다.

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
