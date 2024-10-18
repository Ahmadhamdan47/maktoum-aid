// app/HomeScreen.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'; // Import Text
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

const HomeScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Disable the default header
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Top Left AR Image */}
      <Image
        source={require('../assets/images/ar.png')} // Replace with correct path
        style={styles.topLeftImage}
      />

      {/* Main Logo with text */}
      <Image
        source={require('../assets/images/logo.png')} // Main logo
        style={styles.logo}
      />

      {/* Buttons Row (Guest Corner & Stateless Profile) */}
      <View style={styles.buttonRow}>
        {/* Guest Corner Button */}
        <TouchableOpacity onPress={() => navigation.navigate('GuestCornerScreen')} style={styles.button}>
          <Image
            source={require('../assets/images/guest-corner.png')}
            style={styles.guestCornerImage}
          />
          {/* Optionally, add some descriptive text if necessary */}
          <Text></Text>
        </TouchableOpacity>

        {/* Stateless Profile Button */}
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/images/stateless.png')}
            style={styles.statelessImage} // Style for Stateless button
          />
          {/* Optionally, add some descriptive text if necessary */}
          <Text></Text>
        </TouchableOpacity>
      </View>

      {/* Footer Image: For organizations and activists */}
      <Image
        source={require('../assets/images/foa.png')} // Footer image for organizations and activists
        style={styles.footerTextImage}
        resizeMode="contain" // Ensure the image is not cut off
      />

      {/* Footer Logo */}
      <Image
        source={require('../assets/images/footer-logo.png')} // Footer logo
        style={styles.footerLogo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items from the top
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingTop: 140, // 140px from top of the page to the logo
  },
  topLeftImage: {
    position: 'absolute', // Position absolutely in the top-left corner
    width: 30,
    height: 30,
    top: 61, // 61 pixels from the top of the screen
    left: 22, // 22 pixels from the left side
    resizeMode: 'contain',
  },
  logo: {
    width: 197,
    height: 187,
    marginBottom: 90, // 90px between logo and buttons
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Center buttons
    alignItems: 'center',
    width: '100%',
    marginBottom: 100, // 100px between buttons and FOA image
  },
  button: {
    marginHorizontal: 30, // 60px total between buttons (30px on each side)
    alignItems: 'center', // Center align the image inside the button
  },
  guestCornerImage: {
    width: 98, // Set the width for Guest Corner
    height: 106, // Set the height for Guest Corner
    resizeMode: 'contain', // Ensure proper scaling of the image
  },
  statelessImage: {
    width: 124, // Set the width for Stateless button
    height: 106, // Ensure proper scaling of the image
  },
  footerTextImage: {
    width: 230,
    height: 22,
    marginBottom: 75, // 75px between FOA and footer logo
  },
  footerLogo: {
    width: 158,
    height: 57,
  },
});

export default HomeScreen;
