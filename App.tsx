import React from 'react';
import {StatusBar} from 'react-native';
import Header from './components/Header';
import Restaurants from './components/Restaurants';
import Applications from './components/Applications';
import ApplicantProfile from './components/ApplicantProfile';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => JSX.Element = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <StatusBar barStyle="dark-content" />
        <Header />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Restaurants">
            <Stack.Screen name="Restaurants" component={Restaurants} />
            <Stack.Screen name="Applications" component={Applications} />
            <Stack.Screen name="ApplicantProfile" component={ApplicantProfile} options={{ title: 'Applicant Profile' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
