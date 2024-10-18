// app/CountryStatelessnessDetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Use navigation for React Navigation

const CountryStatelessnessDetailsScreen = () => {
  const navigation = useNavigation(); // Use useNavigation for navigation control

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

      {/* Country Dropdown Section */}
      <View style={styles.countryDropdownContainer}>
        <View style={styles.countryRow}>
          {/* Country Label with Dropdown Icon */}
          <View style={styles.countryLabelContainer}>
            <Text style={styles.countryLabel}>Country</Text>
            <Image
              source={require('../assets/images/dropdown-icon.png')} // Dropdown icon image
              style={styles.dropdownIcon}
            />
          </View>

          {/* Statelessness in Lebanon - split into two lines */}
          <View>
            <Text style={styles.statelessLineOne}>statelessness in</Text>
            <Text style={styles.statelessLineTwo}>Lebanon</Text>
          </View>
        </View>

        {/* Flag under the Country Label */}
        <Image
          source={require('../assets/images/flag.png')} // Country flag image
          style={styles.flagIcon}
        />
      </View>

      {/* Golden Container for Statelessness Detail */}
      <View style={styles.goldContainer}>
        <ScrollView style={styles.scrollableContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            In Lebanon, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit in odio aliquet fringilla. Ut non libero at elit pretium lobortis id non erat...
          </Text>
        </ScrollView>
      </View>

      {/* Organization Dropdown Section */}
      <View style={styles.organizationDropdownContainer}>
        {/* Touchable Opacity for Learn More */}
        <TouchableOpacity onPress={() => navigation.navigate('OrganizationDetailsScreen')} style={styles.learnMoreButton}>
          <Text style={styles.learnMoreText}>
            Learn more about the initiatives and projects taking place to limit statelessness:
          </Text>
        </TouchableOpacity>

        {/* Organization Label and Dropdown */}
        <View style={styles.organizationLabelContainer}>
          <Text style={styles.organizationLabel}>Organization</Text>
          <Image
            source={require('../assets/images/dropdown-icon.png')} // Dropdown icon image
            style={styles.dropdownIcon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 42,
    left: 22,
  },
  backIcon: {
    width: 25,
    height: 27,
  },
  logo: {
    width: 74,
    height: 81,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  countryDropdownContainer: {
    width: 330,
    height: 88,
    backgroundColor: '#F9F9F9', // Container background
    borderColor: '#D2B04C', // Gold border
    borderWidth: 2,
    borderRadius: 12, // Rounded corners
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 5,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  countryLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryLabel: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#3D6F85', // Blue color for "Country" label
    marginRight: 5,
  },
  dropdownIcon: {
    width: 15,
    height: 10,
    tintColor: '#3D6F85', // Blue color for dropdown icon
    resizeMode: 'contain',
  },
  statelessLineOne: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#3D6F85', // Blue color
    textAlign: 'right',
    marginBottom: 2, // Spacing between lines
  },
  statelessLineTwo: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#3D6F85', // Blue color
    textAlign: 'left',
  },
  flagIcon: {
    width: 30,
    height: 20,
    position: 'absolute',
    left: 0,
    bottom: -1, // Ensure 1px space between dropdown and flag
    marginLeft: 10,
    marginBottom: 10,
  },
  goldContainer: {
    width: 330,
    height: 431,
    backgroundColor: '#D2B04C',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  scrollableContent: {
    flex: 1,
  },
  text: {
    fontFamily: 'BakbakOne',
    fontSize: 13,
    color: '#3D6F85',
    lineHeight: 20,
    marginBottom: 10,
  },
  organizationDropdownContainer: {
    width: 330,
    height: 88,
    backgroundColor: '#F9F9F9', // Updated background color
    borderColor: '#D2B04C', // Gold border
    borderWidth: 2,
    borderRadius: 12, // Rounded corners
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  learnMoreButton: {
    flex: 1, // Ensure the button takes up the available space
    justifyContent: 'center', // Center the content vertically
  },
  learnMoreText: {
    fontSize: 12,
    fontFamily: 'BakbakOne',
    color: '#3D6F85', // Blue color for the text
    textAlign: 'left', // Left-align the text
  },
  organizationLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizationLabel: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#D2B04C', // Gold color for the "Organization" text
    marginRight: 5,
  },
});

export default CountryStatelessnessDetailsScreen;
