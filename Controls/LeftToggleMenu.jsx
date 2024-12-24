// components/LeftToggleMenu.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../assets/StyleSheet";
import { IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Choose the icon set you want
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons
const menuItems = [
  { icon: "home", label: "Home", showDetails: true },
  { icon: "plus-circle-outline", label: "New Transaction",  },
  { icon: "timer-sand", label: "Pending Transactions" },
  { icon: "clock-outline", label: "Pending Timesheets" },
  { icon: "magnify", label: "CRIB CRAWL" },
  { icon: "cog-outline", label: "Settings" },
  { icon: "account-cog-outline", label: "Device Settings" },
  { icon: "logout", label: "Logout" },
];

const LeftToggleMenu = ({ onMenuClick }) => {
  return (
    <View style={styles.menuContainer}>
      {/* Centered icon and text below "Home" menu item */}

      <View style={styles.centeredView}>
      <Icon name="account-circle" size={44} color="white" />
       
        <Text style={styles.centeredText}>Karthikeyan Murugesan</Text>
      </View>

      <View style={styles.line} />
      {menuItems.map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => onMenuClick(item.label)}
          >
            {/* <Icon
              name={item.icon}
             color="#2A486F " // Bright red to test
              size={24}
              style={styles.iconstyle}
            /> */}

         <MaterialCommunityIcons name={item.icon} size={24} color="#2A486F"  style={styles.iconstyle}/>
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuText}>{item.label}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.line} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default LeftToggleMenu;
