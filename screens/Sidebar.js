import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from './AuthProvider';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <View>
      <Text>Username: {user ? user.username : 'Guest'}</Text>
      {/* Add other sidebar content */}
    </View>
  );
};

export default Sidebar;