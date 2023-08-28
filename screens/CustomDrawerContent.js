import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const screensWithoutSidebar = ['LoadingScreen', 'Login', 'Registration'];

  // Determine if sidebar content should be displayed
  const shouldDisplaySidebar = !screensWithoutSidebar.includes(
    navigation.state.routes[navigation.state.index].name
  );

  if (!shouldDisplaySidebar) {
    return null; // Don't render sidebar content for specified screens
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;