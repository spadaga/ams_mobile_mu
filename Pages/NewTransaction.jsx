import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import StickyBanner from '../Controls/StickyBanner';
import FloatingLabelInputControl from '../Controls/FloatingLabelInputControl';
import { ActivityIndicator } from 'react-native-paper';
import { ScrollView } from 'react-native-web';
import CustomSnackbar from '../Controls/CustomSnackbar';


const NewTransaction = ({ onNavigateToReviewscreen,onNavigatetojobdetails }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [isListViewVisible, setIsListViewVisible] = useState(false);
  const [listItems, setListItems] = useState([]);

  const [snackbarVisible, setSnackbarVisible] = useState(false);  // State to control Snackbar visibility
  const [snackbarType, setSnackbarType] = useState('success');  // State to control Snackbar type (danger, success, warning)
  const [snackbarMessage, setSnackbarMessage] = useState('Product added successfully');   // State for message content

const handleScanClick = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      addItemToList();
      setSnackbarVisible(true);
    }, 3000); // Simulate a 3-second scan
  };

  const addItemToList = () => {
    const newItem = {
      sku: '12345',
      mfrCode: 'ABC123',
      cat: 'XYZ789',
      min: 10,
      max: 100,
      ordered: 50,
      available: 30,
    };
    setListItems([...listItems, newItem]);
  };

  const handleBackClick = () => {
    setIsScanning(false);
    console.log("back to jobdetails")
    onNavigatetojobdetails();
    
  };


  const handlebacktojobdetails=()=>
  {
    onNavigatetojobdetails();

  } 
  const onDismissSnackbar = () => {
    setSnackbarVisible(false);  // Close the Snackbar after dismissal
  };

  const handleNextclick=()=>
  {
    onNavigateToReviewscreen();

  }

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <StickyBanner message="xyz-inventory" />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          {/* QR Code Scanner */}
          <TouchableOpacity
            style={styles.qrCodeSection}
            onPress={handleScanClick}
          >
            <MaterialIcons name="qr-code-scanner" style={styles.qrCodeIcon} />
            <Text style={styles.qrCodeTitle}>SCAN QR CODE</Text>
            <Text style={styles.qrCodeLink}>Click here to scan next item</Text>
          </TouchableOpacity>

          {/* SKU Input */}
          <View style={styles.skuContainer}>
            <View style={styles.skuInputContainer}>
              <FloatingLabelInputControl
                label="ENTER SKU"
                value={searchValue}
                onChangeText={(text) => setSearchValue(text)}
                showIconContainer={false}
              />
            </View>

            <TouchableOpacity style={styles.addButton}>
              <MaterialIcons name="search" style={styles.addIcon} />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

         
          {/* List View */}

          {/* List View */}
          {listItems.map((item, index) => (
            <View key={index} style={styles.listView}>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>Product SKU:</Text>
                <Text style={styles.listItemValue}>{item.sku}</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>MFR Code:</Text>
                <Text style={styles.listItemValue}>{item.mfrCode}</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>Cat#:</Text>
                <Text style={styles.listItemValue}>{item.cat}</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>Min:</Text>
                <Text style={styles.listItemValue}>{item.min}</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>Max:</Text>
                <Text style={styles.listItemValue}>{item.max}</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>Ordered:</Text>
                <Text style={styles.listItemValue}>{item.ordered}</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.listItemLabel}>Available:</Text>
                <Text style={styles.listItemValue}>{item.available}</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TextInput
                  style={styles.quantityInput}
                  placeholder="Quantity"
                />
                <TouchableOpacity style={styles.removeButton}>
                  <MaterialIcons
                    name="remove-circle"
                    style={styles.removeIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.notesContainer}>
                <Text style={styles.notesLabel}>Notes:</Text>
                <View style={styles.notesInputWrapper}>
                  <TextInput style={styles.notesInput} multiline />
                  <TouchableOpacity
                    style={styles.scanButton}
                    onPress={handleScanClick}
                  >
                    <MaterialIcons
                      name="qr-code-scanner"
                      style={styles.scanIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

           {/* Navigation Buttons */}
           <View style={styles.navigationContainer}>
            <TouchableOpacity style={[styles.navButton, styles.backButton]} onPress={handlebacktojobdetails}>
              <MaterialIcons name="arrow-back" style={styles.navIcon} />
              <Text style={styles.navButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={styles.buttonSpacer} />
            <TouchableOpacity style={[styles.navButton, styles.nextButton]}  onPress={handleNextclick}>
              <Text style={[styles.navButtonText, styles.nextButtonText]}>
                Next
              </Text>
              <MaterialIcons
                name="arrow-forward"
                style={[styles.navIcon, styles.nextIcon]}
              />
            </TouchableOpacity>
          </View>

          {/* Add more content as needed */}
        </View>
      </ScrollView>
      {/* Transparent Overlay with Progress Bar */}
      {isScanning && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#007BFF" />
          <TouchableOpacity
            style={styles.overlayBackButton}
            onPress={handleBackClick}
          >
            <Text style={styles.overlayBackButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}

       {/* Custom Snackbar */}
       <CustomSnackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackbar}
          message={snackbarMessage}
          type={snackbarType}  // Pass type to display the respective background and icon
        />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: 'yellow',
   
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, // Ensures content fills the available space
    padding: 16,
  },
   qrCodeSection: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    qrCodeIcon: {
      fontSize: 100,
      marginBottom: 8,
    },
    qrCodeTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 4,
    },
    qrCodeLink: {
      fontSize: 16,
      textAlign: 'center',
      color: '#007BFF',
      textDecorationLine: 'underline',
    },
    skuContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    skuInputContainer: {
      flex: 4,
      height: 56, // Ensure the height is the same as the button
    },
    addButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2370B3',
      padding: 8,
      height: 56,
      borderRadius: 0,
      borderColor: "#1e88e5",
      borderWidth: 1,
      borderStyle: "solid",
    },
    addIcon: {
      fontSize: 18,
      color: '#fff',
      marginRight: 4,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    navigationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: 56,
      marginTop:16
    },
    navButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      height: 56,
      borderWidth: 1,
      borderColor: "#1e88e5",
    },
    backButton: {
      backgroundColor: '#FFFFFF', // Lighter secondary color
      color: '#1e88e5',
    },
    nextButton: {
      backgroundColor: '#2370B3', // Primary color
    },
    navIcon: {
      fontSize: 24,
      color: '#1e88e5',
      marginRight: 4,
    },
    navButtonText: {
      color: '#1e88e5',
      fontSize: 16,
    },
    nextButtonText: {
      color: "white",
    },
    nextIcon: {
      color: "white",
    },
    buttonSpacer: {
      width: 10, // Space between the buttons
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex:2
    },
    overlayBackButton: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: '#007BFF',
      padding: 15,
      alignItems: 'center',
    },
    overlayBackButtonText: {
      color: 'white',
      fontSize: 24,
    },
    listView: {
      marginTop: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    listItemLabel: {
      fontWeight: 'bold',
    },
    listItemValue: {
      marginLeft: 10,
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    quantityInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginRight: 10,
    },
    removeButton: {
      backgroundColor: '#ff0000',
      padding: 8,
      borderRadius: 5,
    },
    removeIcon: {
      fontSize: 18,
      color: '#fff',
    },
   // Your styles here
  notesInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 5,
  },
  notesInput: {
    flex: 1,
    padding: 10,
  },
  scanButton: {
    padding: 5,
  },
  scanIcon: {
    fontSize: 34,
    color: '#007BFF',
  },
  });
  


export default NewTransaction;