// app/OrganizationDetailsScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

const OrganizationDetailsScreen = () => {
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
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Guest Corner Logo */}
      <Image
        source={require('../assets/images/guest-corner.png')} // Guest Corner logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Country and Organization Container */}
      <View style={styles.dropdownContainer}>
        {/* Country Dropdown Section */}
        <View style={styles.countryRow}>
          <Text style={styles.countryLabel}>Country</Text>
          <Image source={require('../assets/images/dropdown-icon.png')} style={styles.dropdownIcon} resizeMode="contain" />
        </View>

        {/* Flag under Country Dropdown */}
        <Image source={require('../assets/images/flag.png')} style={styles.flagIcon} resizeMode="contain" />

        {/* Organization Dropdown Section (31px below Flag) */}
        <View style={[styles.organizationRow, { marginTop: 31 }]}>
          <Text style={styles.organizationLabel}>Organization</Text>
          <Image source={require('../assets/images/dropdown-icon.png')} style={styles.dropdownIcon} resizeMode="contain" />
        </View>

        {/* Oummal NGO Logo under the Organization Dropdown */}
        <View style={styles.organizationInfo}>
          <Text style={styles.organizationName}>Oummal NGO</Text>
          <Image source={require('../assets/images/oummal-logo.png')} style={styles.organizationLogo} resizeMode="contain" />
        </View>

        {/* Tackled by OUMMAL aligned left, on the same row */}
        <View style={styles.tackledByRow}>
          <Text style={styles.tackledBy}>
            Tackled by {'\n'}
            OUMMAL
          </Text>
        </View>
      </View>

      {/* Projects and Initiatives Section */}
      <View style={styles.projectsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionHeader}>Projects and Initiatives:</Text>
          <Text style={styles.sectionSubText}>Maktoum aid</Text>
          <Text style={styles.sectionHeader}>Website:</Text>
          <Text style={styles.sectionSubText}>oummal.org</Text>
          <Text style={styles.sectionHeader}>Social Media:</Text>
          <Text style={styles.sectionSubText}>oummal</Text>
          <Text style={styles.sectionHeader}>Contact Person:</Text>
          <Text style={styles.sectionSubText}>Nizar Akleh</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    paddingTop: 42,
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
    marginBottom: 11, // 11px distance from logo
  },
  dropdownContainer: {
    width: 330,
    height: 161, // 330x161 px size
    borderColor: '#D2B04C',
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryLabel: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#D2B04C',
  },
  dropdownIcon: {
    width: 12,
    height: 12,
    tintColor: '#D2B04C',
    marginLeft: 5,
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginTop: 1, // 1px space between flag and dropdown
    alignSelf: 'flex-start',
  },
  organizationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizationLabel: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#D2B04C',
  },
  organizationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizationName: {
    fontSize: 14,
    fontFamily: 'BakbakOne',
    color: '#3D6F85',
  },
  organizationLogo: {
    width: 61,
    height: 35, // 61x35 px logo size
    marginLeft: 10,
  },
  tackledByRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22, // 22px distance between Organization dropdown and "Tackled by Oummal"
  },
  tackledBy: {
    fontSize: 14,
    fontFamily: 'BakbakOne',
    color: '#3D6F85',
    textAlign: 'left', // Align the second line to the left
  },
  projectsContainer: {
    width: 330,
    backgroundColor: '#D2B04C', // Gold background for the second container
    borderRadius: 12,
    borderColor: '#D2B04C',
    borderWidth: 2,
    padding: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: 'BakbakOne',
    color: '#3D6F85',
    marginBottom: 10,
  },
  sectionSubText: {
    fontSize: 16,
    fontFamily: 'BakbakOne',
    color: '#3D6F85',
    marginBottom: 10,
  },
});

export default OrganizationDetailsScreen;
