import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons";
import AwesomeAlert from 'react-native-awesome-alerts';
import CustomSnackbar from "../Controls/CustomSnackbar";


// ... rest of your component code ...

const TransactionReview = ({ onNavigateToTransactionScreen }) => {
  const [additionalEmails, setAdditionalEmails] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);  // State to control Snackbar visibility
  const [snackbarType, setSnackbarType] = useState('success');  // State to control Snackbar type (danger, success, warning)
  const [snackbarMessage, setSnackbarMessage] = useState('Product added successfully');   // State for message content


  const emails = [
    "test123@ced.com",
    "test123@ced.com",
    "test123@ced",
    "anotherlong@email.com",
    "yetanotherlong@email.com",
    "test123@ced.com",
    "test123@ced.com",
    "test123@ced",
    "anotherlong@email.com",
    "yetanotherlong@email.com",
  ]; // Add more emails as needed
  const [showAlert, setShowAlert] = useState(false);
  const handleConfirmSubmit = () => {
    setShowAlert(true);
  };
  const onDismissSnackbar = () => {
    setSnackbarVisible(false);  // Close the Snackbar after dismissal
  };
  
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={[styles.sectionTitle, styles.title]}>
        Please review the following items before submitting the transaction:
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Job Name:</Text>
          <Text style={styles.value}>Test Job Name</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Customer PO:</Text>
          <Text style={styles.value}>Test customer po</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Employee Name:</Text>
          <Text style={styles.value}>Judy S</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>Notes:</Text>
          <Text style={styles.value}>Test Notes</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Transaction Items:</Text>
      <View style={[styles.infoContainer, styles.itemsContainer]}>
        <View style={styles.item}>
          <View style={styles.itemDetails}>
            <Text style={styles.itemCode}>SQD Q0120</Text>
            <Text style={styles.itemDescription}>
              #1 FLEXIBLE PRODUCT DESCRIPTION
            </Text>
            <Text style={styles.itemDescription}>
              lorem ipsum cont. Line Notes
            </Text>
          </View>
          <View style={styles.itemQuantityContainer}>
            <Text style={styles.itemQuantity}>Qty: 123</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.itemDetails}>
            <Text style={styles.itemCode}>APP T17</Text>
            <Text style={styles.itemDescription}>
              #1 FLEXIBLE PRODUCT DESCRIPTION
            </Text>
            <Text style={styles.itemDescription}>
              lorem ipsum cont. Line Notes
            </Text>
          </View>
          <View style={styles.itemQuantityContainer}>
            <Text style={styles.itemQuantity}>Qty: 123</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Notification Emails:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.emailsContainer}
      >
        {emails.map((email, index) => (
          <View key={index} style={styles.emailChip}>
            <Text style={styles.emailText}>{email}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Additional Emails:</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="Enter additional emails (separated by commas)"
        onChangeText={(text) => setAdditionalEmails(text)}
        value={additionalEmails}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.navButton, styles.backButton]}>
          <MaterialIcons name="arrow-back" style={styles.navIcon} />
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navButton, styles.submitButton]} onPress={handleConfirmSubmit}>
          <Text style={[styles.navButtonText, styles.nextButtonText]}>
            SUBMIT ORDER
          </Text>
          <MaterialIcons
            name="arrow-forward"
            style={[styles.navIcon, styles.nextIcon]}
          />
        </TouchableOpacity>
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title=""
        message="Are you sure you want to submit?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Yes"
        // confirmButtonColor="#2370B3"
        //  cancelButtonColor="#ffffff"
        onCancelPressed={() => setShowAlert(false)}
        onConfirmPressed={() => {
          setShowAlert(false);
          setSnackbarVisible(true);

          // Delay the navigation logic
          setTimeout(() => {
            onNavigateToTransactionScreen();
            console.log("Navigated to transaction screen");
          }, 2000); // 2000ms = 2 seconds delay
          console.log('Confirmed');
        }}
        confirmButtonStyle={styles.confirmButton}
        cancelButtonStyle={styles.cancelButton}
        confirmButtonTextStyle={styles.confirmButtonText}
        cancelButtonTextStyle={styles.cancelButtonText}
        messageStyle={styles.message}
      />
       {/* Custom Snackbar */}
       <CustomSnackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackbar}
          message={snackbarMessage}
          type={snackbarType}  // Pass type to display the respective background and icon
        />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
  },

  emailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  emailChip: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  emailText: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    backgroundColor: "#f0f7ff",
  },
  itemsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    backgroundColor: "#f5f8ff",
  },
  infoItem: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    flex: 1,
  },
  value: {
    flex: 2,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Align items vertically
    marginBottom: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemQuantityContainer: {
    justifyContent: "center", // Center the quantity text vertically
  },
  itemCode: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    marginBottom: 4,
  },
  itemQuantity: {
    color: "gray",
    textAlign: "right",
  },
  emailsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  email: {
    marginRight: 8,
    marginBottom: 4,
  },
  emailInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginBottom: 16,
  },
  // ... other styles ...

  buttonContainer: {
    flexDirection: "column",
    gap: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  backButton: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.25,
    height: 56,
    borderWidth: 1,
    borderColor: "#1e88e5",
    color: "rgb(30, 136, 229)",
  },

  navButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderColor: "#1e88e5",
    padding: 16,
  },
  backButton: {
    backgroundColor: "#FFFFFF", // Lighter secondary color
    color: "#1e88e5",
  },
  nextButton: {
    backgroundColor: "#2370B3", // Primary color
  },
  navIcon: {
    fontSize: 24,
    color: "#1e88e5",
    marginRight: 4,
  },
  navButtonText: {
    color: "#1e88e5",
    fontSize: 16,
  },

  nextIcon: {
    color: "white",
  },
  submitButton: {
    width: "100%",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 1.25,
    height: 56,
    backgroundColor: "rgb(35, 112, 179)",
    color: "white",
  },
  cancelButton:
  {
    height: 42,
    borderWidth: 1,
    borderColor: "#1e88e5",
    backgroundColor:"white",
    color:"rgb(35, 112, 179)",
    fontWeight:500

  },
  nextButtonText: {
    color: "white",
  },
  confirmButton: {
    backgroundColor: "#2370B3", // Blue background for "Yes" button
    justifyContent: "center",
    alignItems: "center",
    width: 120, // Ensure both buttons have the same width
    height: 42,
    borderRadius: 4,
  },
  cancelButton: {
    backgroundColor: "white", // White background for "Cancel" button
    justifyContent: "center",
    alignItems: "center",
    width: 120, // Ensure both buttons have the same width
    height: 42,
    borderWidth: 1,
    borderColor: "#1e88e5", // Blue border to match Material guidelines
    borderRadius: 4,
  },
  cancelButtonText: {
    color: "#2370B3", // Blue text for "Cancel" button
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  confirmButtonText: {
    color: "white", // White text for "Yes" button
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
  },

});

export default TransactionReview;
