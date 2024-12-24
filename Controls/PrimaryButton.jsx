import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PrimaryButton = ({ title, icon, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.navButton, styles.nextButton, style]} onPress={onPress}>
      <Text style={[styles.navButtonText, styles.nextButtonText]}>{title}</Text>
      {icon && <MaterialIcons name={icon} style={[styles.navIcon, styles.nextIcon]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderColor: "#1e88e5",
  },
  nextButton: {
    backgroundColor: '#2370B3', // Primary color
  },
  navIcon: {
    fontSize: 24,
    color: '#fff',
    marginLeft: 4,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  nextButtonText: {
    color: "white",
  },
  nextIcon: {
    color: "white",
  },
});

export default PrimaryButton;
