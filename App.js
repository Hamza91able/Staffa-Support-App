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

// Main Screens
import Loading from './src/screens/Loading';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import InitialSignup from './src/screens/InitialSignup';
import ViewShifts from './src/screens/ViewShifts';
import ShiftDetails from './src/screens/ShiftDetails';

//Profile Setup Screens
import ProfileSetup from './src/screens/ProfileSetup/ProfileSetup';
import AddressBankInfo from './src/screens/ProfileSetup/AddressBankInfo';
import TermsConditions from './src/screens/ProfileSetup/TermsConditions';
import PrivacyGPDR from './src/screens/ProfileSetup/PrivacyGDPR';
import InformationSharing from './src/screens/ProfileSetup/InformationSharing';
import Notifications from './src/screens/ProfileSetup/Notifications';
import VerificationStep1 from './src/screens/ProfileSetup/VerificationStep1';
import VerificationStep2 from './src/screens/ProfileSetup/VerificationStep2';
import DBS from './src/screens/ProfileSetup/DBS';
import Qualifications from './src/screens/ProfileSetup/Qualifications';
import Certificates from './src/screens/ProfileSetup/Certificates';
import References from './src/screens/ProfileSetup/References';
import Skills from './src/screens/ProfileSetup/Skills';

// Components
import drawerContentComponent from './src/components/DrawerContentComponents';

let mainHeaderBool = undefined

const ProfileSetupStack = createStackNavigator({
  'Profile Setup': {
    screen: ProfileSetup,
    navigationOptions: {
      headerTitle: 'Profile Setup'
    }
  },
  'Address Bank Info': {
    screen: AddressBankInfo,
    navigationOptions: {
      headerTitle: 'Address and Bank Info'
    }
  },
  'Terms Conditions': {
    screen: TermsConditions,
    navigationOptions: {
      headerTitle: 'Terms & Conditions'
    }
  },
  'Privacy GPDR': {
    screen: PrivacyGPDR,
    navigationOptions: {
      headerTitle: 'Privacy & GPDR'
    }
  },
  'Information Sharing': {
    screen: InformationSharing,
    navigationOptions: {
      headerTitle: 'Information Sharing'
    }
  },
  'Notifications': {
    screen: Notifications,
    navigationOptions: {
      headerTitle: 'Notifcations'
    }
  },
  'Verification Step 1': {
    screen: VerificationStep1,
    navigationOptions: {
      headerTitle: 'Verification'
    }
  },
  'Verification Step 2': {
    screen: VerificationStep2,
    navigationOptions: {
      headerTitle: 'Verification'
    }
  },
  'DBS': {
    screen: DBS,
    navigationOptions: {
      headerTitle: 'DBS'
    }
  },
  'Qualifications': {
    screen: Qualifications,
    navigationOptions: {
      headerTitle: 'Qualifications'
    }
  },
  'Certificates': {
    screen: Certificates,
    navigationOptions: {
      headerTitle: 'Certificates'
    }
  },
  'References': {
    screen: References,
    navigationOptions: {
      headerTitle: 'References'
    }
  },
  'Skills': {
    screen: Skills,
    navigationOptions: {
      headerTitle: 'Skills'
    }
  }
})

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
  ProfileSetup: {
    screen: ProfileSetupStack
    // screen: Skills
  }
})


export default createAppContainer(AppSwitchNavigator);
