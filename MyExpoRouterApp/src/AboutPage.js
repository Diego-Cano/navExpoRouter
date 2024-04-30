import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Page</Text>
      <Button title="Go Home -Push-" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Home -Replace-" onPress={() => navigation.replace('Home')} />
    </View>
  );
}
