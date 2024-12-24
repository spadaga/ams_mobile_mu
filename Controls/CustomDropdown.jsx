import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

import { FontAwesome } from '@expo/vector-icons';

// import styles from '../assets/StyleSheet';
const CustomDropdown = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false); // Track if dropdown is open
    const [isFocused, setIsFocused] = useState(false); // For floating label
    // Array of dropdown items
    const items = [
        { label: 'Item 1', value: 'item1' },
        { label: 'Item 2', value: 'item2' },
        { label: 'Item 3', value: 'item3' },
        { label: 'Item 4', value: 'item4' },
        { label: 'Item 5', value: 'item5' },
    ];
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
                setSelectedValue(item.label);
                setDropdownOpen(false); // Close dropdown after selecting
            }}
        >
            <Text style={styles.itemText}>{item.label}</Text>
        </TouchableOpacity>
    );
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.dropdownContainer,
                    dropdownOpen || selectedValue ? styles.activeBorder : styles.inactiveBorder,
                ]}
                onPress={() => setDropdownOpen(!dropdownOpen)} // Toggle the dropdown
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                {/* Floating Label */}
                {isFocused || dropdownOpen || selectedValue ? (
                    <Text style={styles.floatingLabel}>Actions</Text>
                ) : null}

                <Text style={styles.selectedText}>
                    {selectedValue ? selectedValue : 'Actions'}
                </Text>
                {/* Arrow icon changes direction based on dropdown open/close state */}
                {/* Chevron icon changes direction based on dropdown open/close state */}
                <View style={styles.iconContainer}>

                    <FontAwesome name={dropdownOpen ? 'chevron-up' : 'chevron-down'} style={styles.icon} size={20} color="gray" />
                    {/* <Icon
            name={dropdownOpen ? 'expand-less' : 'expand-more'}
            size={24}
            color="#000"
            style={styles.icon}
          /> */}
                </View>
            </TouchableOpacity>

            {dropdownOpen && (
                <View style={styles.customdropdown}>
                    <FlatList
                        data={items}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.value}
                    />
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    marginvertical:
    {
        marginVertical: 0, // Remove any vertical margins
    },
    container: {
        padding: 0, // Removed padding
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        zIndex: 1, // Ensure the container is on top
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56, // Set height to 56px as per Material Design guidelines
  
    borderWidth: 1,
    borderColor: 'rgb(3, 169, 244)',
    borderRadius: 4,
    position: 'relative', // To position the floating label
    paddingRight:"0px"
    },
    activeBorder: {
        borderColor: 'rgb(3, 169, 244)',
      },
      inactiveBorder: {
        borderColor: 'rgb(3, 169, 244)',
      },
    customdropdown: {
        position: 'absolute',
        top: 56,
        left: 0,
        right: 0,
        borderWidth: 1,
        borderColor: 'rgb(3, 169, 244)',
        borderRadius: 4,
        backgroundColor: '#fff',
        maxHeight: 150,
        zIndex: 999999, // Ensure the dropdown is on top
        width: '100%',
        marginVertical: 0, // Remove any vertical margins
    },
    
    dropdownItem: {
        padding: 10, // Add minimal padding for touch targets
       
    },
    selectedText: {
        fontSize: 16,
        color: '#000', flex: 1, // Take up the remaining space
        paddingHorizontal:8
  
    },
    itemText: {
        fontSize: 16,
        color: '#000',
    },
    floatingLabel: {
        position: 'absolute',
        top: -12,
        left: 10,
        fontSize: 12,
        color: 'rgb(117, 117, 117)',
        backgroundColor: '#fff',
        paddingHorizontal: 5,
      },
    icon: {
        alignSelf: 'center', // Center icon vertically
    },
    iconContainer: {
        borderLeftWidth: 1, // Border to the left of the icon
        borderLeftColor: 'rgb(3, 169, 244)', // Match the dropdown border color
        justifyContent: 'center',
        height: "56px",
        padding: "12px"
    },
});
export default CustomDropdown;
