// Autocomplete.js
import React, { useState } from 'react';
import { Autocomplete } from 'react-native-paper-autocomplete';
import { View, Button, StyleSheet } from 'react-native';

const AutocompleteComponent1 = ({ label, value, onChange, options,style  }) => {
  return (
    <Autocomplete
      label={label}
      value={value}
      onChange={onChange}
      options={options}
      style={[styles.autocomplete, style]}
    />
  );
};

const styles = StyleSheet.create({
    autocomplete: {
      backgroundColor: '#e4f3f7',
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 2,
    },
  });
export default AutocompleteComponent1;