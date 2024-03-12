import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ing from './Ing';

const Stack = createNativeStackNavigator();

function Delivery() {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen
        name="Complete"
        component={Ing}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Delivery;
