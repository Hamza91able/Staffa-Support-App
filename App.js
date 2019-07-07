/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

// Screens
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import SignUp from './src/screens/SignUp';

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
})

const AppSwitchNavigator = createSwitchNavigator({
  Loading: {
    screen: Loading,
  },
  SignUp: {
    screen: SignUp,
  },
  Login: {
    screen: Login,
  },
  Dashboard: {
    screen: AppDrawerNavigator,
  },

})


export default createAppContainer(AppSwitchNavigator);
