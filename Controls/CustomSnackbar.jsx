import React from 'react';
import { View, Text } from 'react-native';
import { Snackbar, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../assets/StyleSheet';

const CustomSnackbar = ({ visible, onDismiss, message, type }) => {
    // Define icons and background colors for each type
    const snackbarTypes = {
        success: {
            icon: 'check-circle',
            backgroundColor: '#4CAF50', // Green for success
        },
        danger: {
            icon: 'error',
            backgroundColor: '#F44336', // Red for danger
        },
        warning: {
            icon: 'warning',
            backgroundColor: '#FF9800', // Orange for warning
        },
    };

    const currentSnackbar = snackbarTypes[type] || snackbarTypes.warning; // Default to warning if type not found

    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={3000} // Automatically dismiss after 3 seconds
            wrapperStyle={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                alignItems: 'center', // Center horizontally
                zIndex:9
            }}
            style={{
                width: '90%', // Set the width of the Snackbar
                backgroundColor: currentSnackbar.backgroundColor, // Use background color based on type
                borderRadius: 5, // Rounded corners for styling
                paddingVertical: 0, // Remove vertical padding to reduce height
                minHeight: 40, // Set minimum height explicitly
            }}
        >
            <View style={styles.snackbarContent}>
                {/* Icon on the left side */}
                <MaterialIcons name={currentSnackbar.icon} size={24} color="white" style={styles.icon} />

                {/* Snackbar message */}
                <Text style={styles.snackbarMessage}>{message}</Text>

                {/* Close icon on the right side */}
                <IconButton
                    icon="close"
                    color="white"
                    size={20}
                    onPress={onDismiss}
                    style={styles.closeIcon}
                />
            </View>
        </Snackbar>
    );
};

export default CustomSnackbar;
