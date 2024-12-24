import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox, Text, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const CheckboxWithText = () => {
  const [checked, setChecked] = useState(false); // State to control checkbox

 // Override default theme with blue primary color
 const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(3, 169, 244)', // Set primary color to blue
    },
  };

  const toggleCheckbox = () => {
    setChecked(!checked); // Toggle the checkbox state
  };

  return (
    <PaperProvider theme={theme}> {/* Provide custom theme to your app */}
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'} // Set the status of the checkbox
            onPress={toggleCheckbox} // Toggle checkbox when pressed
            color={theme.colors.primary} // Use the primary color from the theme
          />
          <Text style={styles.text}>I agree to the terms and conditions</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row-reverse',  // Align checkbox and text horizontally
  //   alignItems: 'center', // Center checkbox and text vertically
  //   marginVertical: 10, // Add some spacing
  // },
  checkboxContainer: {
    flexDirection: "row", // Row layout
    alignItems: "center", // Center items vertically
    justifyContent: "flex-end", // Align everything to the right
  },
  text: {
    fontSize: 16,
    color: '#333', // Text color
    marginLeft: 8, // Add some space between checkbox and text
  },
});

export default CheckboxWithText;
