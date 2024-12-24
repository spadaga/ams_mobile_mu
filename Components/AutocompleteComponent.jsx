import React, { useState, useEffect, useRef } from 'react';
import { FlatList, TextInput, StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../assets/StyleSheet';
const AutocompleteComponent = ({ data, onSelect, minChars = 3, placeholder }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const isValueAssignedRef = useRef(false);

  useEffect(() => {
    if (searchText.length >= minChars) {
      const filtered = data.filter((item) =>
        item.value.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredData(filtered);
      setShowDropdown(filtered.length > 0);
      setError(filtered.length > 0 ? '' : 'No matching options found.');
    } else {
      setFilteredData([]);
      setShowDropdown(false);
      if (searchText.length > 0 && searchText.length < minChars) {
        setError(`Please enter at least ${minChars} characters.`);
      } else {
        setError('');
      }
    }
  }, [searchText, data, minChars]);

  const handleSelect = (item) => {
    onSelect(item);
    setSearchText(item.value);
    setShowDropdown(false);
    isValueAssignedRef.current = true;
  };

  const handleTextChange = (text) => {
    setSearchText(text);
    if (isValueAssignedRef.current) {
      isValueAssignedRef.current = false;
    }
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.item} onPress={() => handleSelect(item)}>
      <Text style={styles.text}>{item.value}</Text>
    </Pressable>
  );

  useEffect(() => {
    if (isValueAssignedRef.current) {
      setShowDropdown(false);
      isValueAssignedRef.current = false;
    }
  }, [searchText]);

  return (
    <View style={styles.autocompleteContainer}>
      <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
        <Text
          style={[
            styles.label, 
            { top: isFocused || searchText.length > 0 ? -10 : 16, fontSize: isFocused || searchText.length > 0 ? 12 : 16 }
          ]}
        >
          {placeholder}
        </Text>
        <TextInput
        style={[
            styles.textInput,styles.inputborder,
            isFocused ? styles.textInputFocused : styles.textInputNormal
          ]}
          value={searchText}
          onChangeText={handleTextChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=""
        />
        <Pressable style={styles.iconContainer} onPress={() => setShowDropdown(!showDropdown)}>
          <FontAwesome name={showDropdown ? 'chevron-up' : 'chevron-down'} size={20} color="gray" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {searchText.length >= minChars && showDropdown && (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={true}
          style={styles.dropdown}
        />
      )}
    </View>
  );
};


export default AutocompleteComponent;
