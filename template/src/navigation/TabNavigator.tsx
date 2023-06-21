import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import Profile from '@screens/Profile';

const TabNavigator = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
