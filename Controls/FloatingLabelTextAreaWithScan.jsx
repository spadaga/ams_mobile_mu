import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../assets/StyleSheet";

const FloatingLabelTextAreaWithScan = ({ label, value, onChangeText, onScan, numberOfLines = 6 }) => {
    const [isFocused, setIsFocused] = useState(false);
    const textAreaHeight=100;
    useEffect(() => {
        if (value) {
            setIsFocused(true);
        }
    }, [value]);

    const handleScanPress = () => {
        if (onScan) { // Check if onScan prop is provided
            onScan(); // Call the onScan function
        } else {
            console.log("notes scan bnutton ")
       
        }
    };

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

            <View style={styles.textAreaWithIcon}> {/* Container for text area and icon */}
                <TextInput
                    style={[
                       
                        styles.textArea,
            // Set a specific height for the text area
            { height: textAreaHeight },
            isFocused ? styles.textInputFocused : styles.textInputNormal,
            { flex: 1 }, // Important for proper layout
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
                    multiline={true}
                    numberOfLines={numberOfLines}
                  
                />
                <TouchableOpacity style={styles.iconContainer} onPress={handleScanPress}>
                    <FontAwesome name="qrcode" size={24} color="gray" />
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default FloatingLabelTextAreaWithScan;