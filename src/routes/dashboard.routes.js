import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

import Help from '../pages/Help';
import MapGlobal from '../pages/MapGlobal';
import ListCases from '../pages/ListCases';

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#f8f8f2',
        inactiveTintColor: '#6272a4',
        style: {
          backgroundColor: '#44475A',
          borderTopColor: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="map-marked-alt" color={color} size={size} />
          ),
        }}
        name="Mapa"
        component={MapGlobal}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-friends" color={color} size={size} />
          ),
        }}
        name="Casos"
        component={ListCases}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="hand-holding-heart" color={color} size={size} />
          ),
        }}
        name="Ajudar"
        component={Help}
      />
    </Tab.Navigator>
  );
}
