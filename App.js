import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import GuestCornerScreen from './app/GuestCornerScreen'; // Adjust path if needed
import CountryStatelessnessDetailScreen from './app/CountryStatelessnessDetailScreen'; // Adjust path if needed
import OrganizationDetailsScreen from './app/OrganizationDetailsScreen'; // Adjust path if needed
import HomeScreen from './app/index'; // This imports HomeScreen from index.js

const Stack = createStackNavigator();

// Prevent the splash screen from hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    BakbakOne: require('./assets/fonts/BakbakOne-Regular.ttf'),
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Do not render anything until the font is loaded
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="GuestCornerScreen" component={GuestCornerScreen} />
          <Stack.Screen name="CountryStatelessnessDetailScreen" component={CountryStatelessnessDetailScreen} />
          <Stack.Screen name="OrganizationDetailsScreen" component={OrganizationDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
