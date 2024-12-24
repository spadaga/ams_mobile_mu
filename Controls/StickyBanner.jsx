import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../assets/StyleSheet';
const StickyBanner = ({ message, subHeader }) => {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.bannericonContainer}>
        <MaterialIcons name="info" style={styles.bannerIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bannerText}>
          {message}
        </Text>
        {subHeader && <Text style={styles.bannerSubHeader}>{subHeader}</Text>}
      </View> </View>
  );
};

export default StickyBanner;
