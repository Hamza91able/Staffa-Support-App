/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import SignUp from './src/screens/SignUp';

// Components
import drawerContentComponent from './src/components/DrawerContentComponents';

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  Login: {
    screen: Login,
  },
},
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        headerTitle: routeName,
      }
    },
    initialRouteName: 'Dashboard',
    contentComponent: drawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
)

const StackNavigator = createStackNavigator({
  Dashboard: AppDrawerNavigator
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
          name='bars'
          size={30}
        />,
        headerStyle: {
          backgroundColor: '#FF8C00'
        },
      }
    }
  }
)

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
