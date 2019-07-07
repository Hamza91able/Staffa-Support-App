/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons'

// Screens
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import SignUp from './src/screens/SignUp';

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Login: {
    screen: Login,
  }
},
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: routeName
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon name="md-menu" size={30} />
        )
      };
    }
  }
)

const StackNavigator = createStackNavigator({
  Dashboard: AppDrawerNavigator
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
    screen: StackNavigator,
  },

})


export default createAppContainer(AppSwitchNavigator);
