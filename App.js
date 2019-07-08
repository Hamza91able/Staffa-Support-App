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
import InitialSignup from './src/screens/InitialSignup';
import ViewShifts from './src/screens/ViewShifts';
import ShiftDetails from './src/screens/ShiftDetails';

// Components
import drawerContentComponent from './src/components/DrawerContentComponents';

let mainHeaderBool = undefined

const ShiftsStack = createStackNavigator({
  'View Shifts': {
    screen: ViewShifts,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
        headerTitle: 'View Shifts',
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
  },
  'Shift Details': {
    screen: ShiftDetails,
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      }
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  'View Shifts': {
    screen: ShiftsStack,
  },
},
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        header: mainHeaderBool,
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
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: InitialSignup,
  },
  Dashboard: {
    screen: StackNavigator,
  },

})


export default createAppContainer(AppSwitchNavigator);
