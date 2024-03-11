import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoriteContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return { title: catId };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: "About the meal" }}
              // options={{
              //   headerRight: () => {
              //     return <Button title="tap me!" onPress={}/>;
              //   },
              // }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
