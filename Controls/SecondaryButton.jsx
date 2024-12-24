import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SecondaryButton = ({ title, icon, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.navButton, styles.backButton, style]} onPress={onPress}>
      {icon && <MaterialIcons name={icon} style={[styles.navIcon, styles.backIcon]} />}
      <Text style={[styles.navButtonText, styles.backButtonText]}>{title}</Text>
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
  backButton: {
    backgroundColor: '#FFFFFF', // Lighter secondary color
    color: '#1e88e5',
  },
  navIcon: {
    fontSize: 24,
    color: '#1e88e5',
    marginRight: 4,
  },
  backButtonText: {
    color: '#1e88e5',
    fontSize: 16,
  },
  backIcon: {
    color: '#1e88e5',
  },
});

export default SecondaryButton;
