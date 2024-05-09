import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ing from "./Ing";
import Complete from "./Complete";

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ing" component={Ing} options={{ headerShown: false }} />
      <Stack.Screen name="Complete" component={Complete} options={{ title: "완료하기" }} />
    </Stack.Navigator>
  );
}

export default Delivery;
