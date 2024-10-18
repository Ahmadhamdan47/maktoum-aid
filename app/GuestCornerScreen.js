// app/GuestCornerScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

const GuestCornerScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Disable the default header
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../assets/images/back.png')} // Back button image
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Guest Corner Logo */}
      <Image
        source={require('../assets/images/guest-corner.png')} // Guest Corner logo
        style={styles.logo}
      />

      {/* Golden Container for the Main Text */}
      <View style={styles.goldContainer}>
        <ScrollView style={styles.scrollableContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            Statelessness refers to the condition of an individual who is not considered a national or citizen by any country. This lack of nationality can occur for various reasons, and stateless individuals often face significant challenges in terms of accessing basic rights and services.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Causes of Statelessness:</Text>
          </Text>
          <Text style={styles.text}>
            Discrimination: Some individuals may be excluded from citizenship due to discriminatory laws or policies.
          </Text>
          <Text style={styles.text}>
            Conflict and War: Displacement caused by conflict can lead to statelessness when people are unable to establish or prove their nationality.
          </Text>
          <Text style={styles.text}>
            Changes in Borders: Border changes, state succession, or the creation of new nations can leave certain populations without citizenship.
          </Text>
          <Text style={styles.text}>
            Gender Discrimination: In some countries, nationality laws may discriminate against women, making it difficult for them to pass citizenship to their children.
          </Text>
          <Text style={styles.text}>
            <Text style={styles.boldText}>Consequences of Statelessness:</Text>
          </Text>
          <Text style={styles.text}>
            Limited Access to Rights: Stateless individuals often face difficulties in accessing education, healthcare, employment, and other basic services.
          </Text>
        </ScrollView>
      </View>

      {/* Learn More Section */}
      <View style={styles.learnMoreContainer}>
        <View style={styles.learnMoreContent}>
          <TouchableOpacity onPress={() => navigation.navigate('CountryStatelessnessDetailScreen')} style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>
              Learn more about statelessness and the initiatives taking place to limit it in your country:
            </Text>
          </TouchableOpacity>
          <View style={styles.countryDropdown}>
            {/* Row for the Country label and Dropdown Icon */}
            <View style={styles.countryRow}>
              <Text style={styles.countryLabel}>Country</Text>
              <Image
                source={require('../assets/images/dropdown-icon.png')} // Dropdown icon image
                style={styles.dropdownIcon}
              />
            </View>
            {/* Flag Under the Dropdown */}
            <Image
              source={require('../assets/images/flag.png')} // Country flag image
              style={styles.flagIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42, // 42px from the top to the logo
    backgroundColor: '#F9F9F9', // Same background color
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 42, // 42px from the top for the back button
    left: 22, // Ensure it aligns with the logo and design
  },
  backIcon: {
    width: 25, // Back button size
    height: 27,
  },
  logo: {
    width: 74,
    height: 81,
    marginBottom: 20, // Space between logo and gold container
    resizeMode: 'contain',
  },
  goldContainer: {
    width: 330,
    height: 524,
    backgroundColor: '#D2B04C', // Gold color
    borderRadius: 10,
    padding: 10, // Padding inside the container
    marginBottom: 20, // Space between the text container and the "Learn More" section
  },
  scrollableContent: {
    flex: 1,
  },
  text: {
    fontFamily: 'BakbakOne', // Use Bakbak One font
    fontSize: 13,
    color: '#3D6F85', // Blue color for the text
    lineHeight: 20,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#3D6F85',
  },
  learnMoreContainer: {
    width: 330,
    height: 88,
    backgroundColor: '#F9F9F9', // Background color
    borderColor: '#D2B04C', // Gold border
    borderWidth: 2,
    borderRadius: 12, // Rounded corners
    padding: 10,
    justifyContent: 'center',
  },
  learnMoreContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  learnMoreText: {
    fontSize: 13,
    fontFamily: 'BakbakOne',
    color: '#3D6F85', // Blue color for the text
    flex: 1, // Ensure the text takes up the available space
    marginRight: 10,
  },
  countryDropdown: {
    flexDirection: 'column', // Column to stack the row and flag vertically
    alignItems: 'center',
  },
  countryRow: {
    flexDirection: 'row', // Row for "Country" label and dropdown icon
    alignItems: 'center',
  },
  countryLabel: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#D2B04C', // Gold color for the "Country" label
    marginRight: 5, // Space between the label and dropdown icon
  },
  dropdownIcon: {
    width: 10, // Adjust the size based on your icon
    height: 10,
    tintColor: '#D2B04C', // Gold color for the dropdown icon
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginTop: 5, // Space between the dropdown icon and flag
  },
  learnMoreButton: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default GuestCornerScreen;
