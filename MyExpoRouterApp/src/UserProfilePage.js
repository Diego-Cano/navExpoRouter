import React from 'react';
import { View, Text } from 'react-native';

// `route` prop will be passed automatically by the navigation stack.
export default function UserProfilePage({ route }) {
  // Extract the `id` param from the route.
  const { id } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Profile Page</Text>
      <Text>User ID: {id}</Text>
    </View>
  );
}
