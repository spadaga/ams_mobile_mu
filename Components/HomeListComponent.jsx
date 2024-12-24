import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Example icon package
import styles from '../assets/StyleSheet';




const HomeListComponent = () => {
  return (
    <View style={styles.boxContainer}>
    {/* Left Icon */}
    <MaterialIcons  name="list-alt" style={styles.leftIcon} />

    {/* Middle Text */}
    <Text style={styles.text}>This is the middle text</Text>

    {/* Right Chevron inside a Circle */}
    <View style={styles.rightIconWrapper}>
      <MaterialIcons name="chevron-right" style={styles.rightChevron} />
    </View>
  </View>
  )
}

export default HomeListComponent
