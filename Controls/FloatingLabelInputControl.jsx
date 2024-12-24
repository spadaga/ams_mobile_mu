import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../assets/StyleSheet";

const FloatingLabelInputControl = ({ label, value, onChangeText , showIconContainer = true}) => {
  const [isFocused, setIsFocused] = useState(false);

    // Ensure the label adjusts when value is pre-populated
    useEffect(() => {
      if (value) {
        setIsFocused(true);
      }
    }, [value]);

  return (
   
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          isFocused ? styles.inputborder : styles.textInputNormal,
        ]}
      >
        <Text
          style={[
            styles.label,
            { top: isFocused ? -10 : 16, fontSize: isFocused ? 12 : 16 },
          ]}
        >
          {label}
        </Text>
        {/* <View > */}

        <TextInput
          style={[
            styles.textInput,
            styles.inputborder,
            isFocused ? styles.textInputFocused : styles.textInputNormal,
          ]}
          label={label}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            if (!value) {
              setIsFocused(false);
            }
          }}
          placeholder=""
        />
        {/* Conditionally show or hide the iconContainer */}
          {showIconContainer && (
            <View style={styles.iconContainer}>
              <FontAwesome name="search" size={20} color="gray" />
            </View>
          )}
        {/* </View> */}
      </View>
 
  );
};

export default FloatingLabelInputControl;
