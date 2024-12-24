import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // or import from 'react-native-vector-
import styles from '../assets/StyleSheet';
import { useNavigation } from "@react-navigation/native";
const ListProductDetails = ({ imageUrl, description, upc, ordered, min, max, onHand, onNavigateToProductDetails }) => {
  const handlePress = () => {
      const product  = { imageUrl, description, upc, ordered, min, max, onHand };
      console.log("Navigate to ProductDetails with:", product );
      onNavigateToProductDetails(product ); // Pass product data to MasterLayout
      
  };

  return (
    <View style={styles.InvboxContainer}>
    <View style={styles.productDetailsContainer}>
      <Image source={imageUrl } style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productDescription}>{description}</Text>
        <View style={styles.detailRow}>
          <Text style={styles.productLabel}>UPC: </Text>
          <Text style={styles.productValue}>{upc}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.productLabel}>Ordered: </Text>
          <Text style={styles.productValue}>{ordered}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.productLabel}>Min: </Text>
          <Text style={styles.productValue}>{min}</Text>
          {/* Spacer */}
          <View style={styles.verticalDivider} />

          <Text style={styles.productLabel}>Max: </Text>
          <Text style={styles.productValue}>{max}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.productLabel,styles.greenlabel]}>On Hand: </Text>
          <Text style={[styles.productValue,styles.greenlabel]}>{onHand}</Text>
        </View>
      </View>
      {/* Right Chevron */}
      {/* Right Chevron inside a Circle */}
      <TouchableOpacity onPress={handlePress}>
    <View style={styles.rightIconWrapper}>
      <MaterialIcons name="chevron-right" style={styles.rightChevron} />
    </View>
    </TouchableOpacity>
    </View>
    </View>
  );
};
export default ListProductDetails
