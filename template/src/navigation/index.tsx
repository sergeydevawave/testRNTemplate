import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '@navigation/TabNavigator';

const MainNavigator = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
