import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FloatingLabelDropdown = ({ label, data, value, onValueChange, style }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animatedLabelPosition] = useState(new Animated.Value(value ? 1 : 0));
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    setShowDropdown(false);
  };

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [20, -8],
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: isFocused ? "#6200EE" : "#6A6A6A",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 4,
    zIndex: 1,
  };

  const handleSelect = (item) => {
    onValueChange(item);
    setShowDropdown(false);
    handleFocus();
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      <TouchableOpacity
        style={[styles.inputContainer, isFocused && styles.focusedInput]}
        onPress={() => {
          setShowDropdown(!showDropdown);
          if (!isFocused) handleFocus();
        }}
        activeOpacity={0.7}
      >
        <Text style={value ? styles.valueText : styles.placeholderText}>
          {value || "Select an option"}
        </Text>
        <MaterialIcons
          name={showDropdown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color={isFocused ? "#6200EE" : "#6A6A6A"}
        />
      </TouchableOpacity>
      {showDropdown && (
        <View style={styles.dropdown}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      position: "relative",
    },
    label: {
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 4,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "rgb(3, 169, 244)",
      borderRadius: 4, // MUI standard
      paddingHorizontal: 16,
      height: 56, // MUI standard height
      justifyContent: "space-between",
      backgroundColor: "#FFFFFF",
      elevation: 2,
    },
    focusedInput: {
      borderColor: "#1976D2", // MUI primary color for focus
    },
    placeholderText: {
      color: "#6A6A6A",
      fontSize: 16,
    },
    valueText: {
      color: "#000000",
      fontSize: 16,
    },
    dropdown: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: "#6A6A6A",
      borderRadius: 4,
      backgroundColor: "#FFFFFF",
      elevation: 4,
      maxHeight: 200,
      overflow: "hidden",
    },
    dropdownItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#EEEEEE",
    },
    dropdownItemText: {
      fontSize: 16,
      color: "#000000",
    },
  });;

export default FloatingLabelDropdown;
