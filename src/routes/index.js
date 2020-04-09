import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import DashboardRoutes from './dashboard.routes';

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardRoutes" component={DashboardRoutes} />
    </Stack.Navigator>
  );
}
