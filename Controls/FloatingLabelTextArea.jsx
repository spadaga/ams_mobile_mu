import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const FloatingLabelTextArea = ({
  label,
  value,
  onChangeText,
  onScanQRCode,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [animatedLabelPosition] = useState(new Animated.Value(value ? 1 : 0));
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false); // Track keyboard focus


  const handleFocus = () => {
    setIsFocused(true);
    setIsKeyboardFocus(true); // Mark the input as focused by keyboard
    Animated.timing(animatedLabelPosition, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
      zIndex: 1,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedLabelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: "absolute",
    left: 16,
    top: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [20, -10],
    }),
    fontSize: animatedLabelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: isFocused ? "#6200ee" : "#aaa",
    backgroundColor: isFocused ? "#fff" : "#fff",
    paddingHorizontal: 5,
    zIndex: 1, // Added z-index for label
  };
// Determine the dynamic border color based on focus state
// Border color for focused state
  const borderColor = isKeyboardFocus
    ? "#6200ee" // Blue color when focused by keyboard navigation
    : "rgb(3, 169, 244)"; // Default color for other focus cases (tap/mouse)

  const inputContainerStyle = {
    ...styles.inputContainer,
    borderColor: borderColor,
  };

  return (
    <View style={[styles.container, style]}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
        <View style={inputContainerStyle}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.textArea, isFocused && styles.focusedTextArea]} // Apply focused styles
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline
          {...props}
        />
        <TouchableOpacity onPress={onScanQRCode} style={styles.iconContainer}>
          {/* <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/qr-code.png" }}
            style={styles.icon}
          /> */}

          <MaterialIcons name="qr-code-scanner" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    position: "relative",
  },
  label: {
    backgroundColor: "#fff",
    paddingHorizontal: 2,
  },
  textArea: {
    flex: 1,
    height: 100,
    borderWidth: 1,
    borderColor: "rgb(3, 169, 244)", // Changed default border color
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
  },
  focusedTextArea: {
    borderWidth: 1,
    borderColor: "rgb(3, 169, 244)", // Changed default border color
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -20 }], // Adjust to center icon vertically
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 32, // Adjust icon size
    color: "#007aff", // Icon color
  },
  focusedInputContainer: {
    borderColor: "red", // Border color when focused
  },
});

export default FloatingLabelTextArea;
