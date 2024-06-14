import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BemVindo from './bemVindo';
import RotaInterna from './rotaInterna';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="BemVindo">
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
      />
      <Stack.Screen
        name="rotaInterna"
        component={RotaInterna}
      />
    </Stack.Navigator>
  );
}
