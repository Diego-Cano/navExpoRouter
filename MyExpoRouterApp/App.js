import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/HomePage';
import AboutPage from './src/AboutPage';
import UserProfilePage from './src/UserProfilePage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="UserProfile" component={UserProfilePage} options={({ route }) => ({ title: `User ID: ${route.params.id}` })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
