// components/MainContent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../assets/StyleSheet';

const MainContent = ({ renderComponent  }) => {
    return (
        <View style={styles.contentContainer}>
          {renderComponent  }
        </View>
    );
}



export default MainContent;
