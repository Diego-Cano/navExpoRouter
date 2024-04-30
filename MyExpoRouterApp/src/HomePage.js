import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Button title="Go to About Page" onPress={() => navigation.navigate('About')} />
      <Button title="Go to User Profile Page" onPress={() => navigation.navigate('UserProfile', { id: 1 })} />
    </View>
  );
}
