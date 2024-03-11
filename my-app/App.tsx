import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import KeywordScreen from "./src/screens/KeywordScreen";
import EntertainmentScreen from "./src/screens/EntertainmentScreen";
import SocialScreen from "./src/screens/SocialScreen";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="구글 키워드"
          component={KeywordScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="apps" color={color} size={size} />,
          }}
        />
        <BottomTab.Screen
          name="Social"
          component={SocialScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="people" color={color} size={size} />,
          }}
        />
        <BottomTab.Screen
          name="Entertainment"
          component={EntertainmentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="musical-notes" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
