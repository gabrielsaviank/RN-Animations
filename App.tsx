import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import SwipeScreen from './screens/swipe/SwipeScreen';


const switchNavigator = createSwitchNavigator({
  mainFlow: createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: false
      }
    },
    Swipe: {
      screen: SwipeScreen
    }
  })
})

export default createAppContainer(switchNavigator);
