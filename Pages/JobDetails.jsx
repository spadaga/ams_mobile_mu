import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Checkbox, Button, Menu, Divider } from "react-native-paper";
import StickyBanner from "../Controls/StickyBanner";
import FloatingLabelInputwithscanicon from "../Controls/FloatingLabelInputwithscanicon";
import FloatingLabelTextArea from "../Controls/FloatingLabelTextArea";
import CheckboxWithText from "../Controls/CheckboxWithText";
import FloatingLabelDropdown from "../Controls/FloatingLabelDropdown";
import SecondaryButton from "../Controls/SecondaryButton";
import PrimaryButton from "../Controls/PrimaryButton";

const JobDetails = ({
  onNavigateToTransactionScreen,
  onNavigateToProjectSelection,
}) => {
  const [checked, setChecked] = useState(false);
  const [jobName, setJobName] = useState("");
  const [customerPO, setCustomerPO] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [notes, setNotes] = useState("");
  const [customField1, setCustomField1] = useState("");
  const [customField2, setCustomField2] = useState("");
  const [customField3, setCustomField3] = useState("");
  const [customField4, setCustomField4] = useState("");

  const toggleCheckbox = () => setChecked(!checked);
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const data = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleQRCodeScan = () => {
    console.log("QR Code Scan", "QR Code scan functionality triggered!");
  };

  const handleNextClick = () => {
    onNavigateToTransactionScreen();
  };

  const handleBackClick = () => {
    onNavigateToProjectSelection();
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <StickyBanner message="xyz-inventory" subHeader="This is your dashboard" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Job Name */}
        <FloatingLabelInputwithscanicon
          label="Job Name"
          value={jobName}
          onChangeText={setJobName}
          showIconContainer={true}
        />

        <FloatingLabelInputwithscanicon
          label="Customer PO"
          value={customerPO}
          onChangeText={setCustomerPO}
          showIconContainer={true}
        />

        <FloatingLabelInputwithscanicon
          label="Employee Name"
          value={employeeName}
          onChangeText={setEmployeeName}
          showIconContainer={true}
        />

        {/* Notes (TextArea) */}
        <FloatingLabelTextArea
          label="Notes"
          value={text}
          onChangeText={setText}
          onScanQRCode={handleQRCodeScan}
          style={styles.textArea}
        />

        {/* Save as My Defaults */}
        {/* Save as My Defaults */}
        <View style={styles.saveDefaultsContainer}>

          <CheckboxWithText />

        </View>
        {/* Custom Fields */}

        {/* Custom Field 1 */}
        <FloatingLabelInputwithscanicon
          label="Custom Field 1 "
          value={customField1}
          onChangeText={setCustomField1}
          showIconContainer={true}
        />

        {/* Custom Field 2 */}
        <View style={styles.customFieldRow}>
          <FloatingLabelDropdown
            label="Custom Field 2"
            data={data}
            value={selectedValue}
            onValueChange={setSelectedValue}
            style={styles.flexDropdown}
          />
          <TouchableOpacity onPress={handleQRCodeScan} style={styles.iconButton}>
            <MaterialIcons name="qr-code-scanner" size={24} color="rgb(0, 122, 255)" />
          </TouchableOpacity>
        </View>

        {/* Custom Field 3 */}
        <View style={styles.customFieldRow}>
          <FloatingLabelDropdown
            label="Custom Field 3"
            data={data}
            value={selectedValue}
            onValueChange={setSelectedValue}
            style={styles.flexDropdown}
          />
          <TouchableOpacity onPress={handleQRCodeScan} style={styles.iconButton}>
            <MaterialIcons name="qr-code-scanner" size={24} color="rgb(0, 122, 255)" />
          </TouchableOpacity>
        </View>

        {/* Custom Field 4 */}
        <FloatingLabelInputwithscanicon
          label=" Custom Field 4 "
          value={customField4}
          onChangeText={setCustomField4}
          showIconContainer={true}
        />

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <SecondaryButton
            title="Back"
            icon="arrow-back"
            onPress={handleBackClick}
          />
          <View style={styles.buttonSpacer} />
          <PrimaryButton
            title="Next"
            icon="arrow-forward"
            onPress={handleNextClick}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marginvertical:
  {
    marginVertical: 0, // Remove any vertical margins
  },

  bannerContainer: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "yellow",
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1, // Ensures content fills the available space
    padding: 16,
    gap: 16, // This ensures equal space between each control
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  required: {
    color: "red",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#6200ee",
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  iconContainer: {
    marginLeft: 8,
  },
  icon: {
    fontSize: 24,
    color: "#6200ee",
  },
  // checkboxContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 16,
  // },
  checkboxText: {
    fontSize: 16,
  },
  customFieldContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    width: "48%",
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 56,
    marginTop: 16,
  },
  buttonSpacer: {
    width: 10, // Space between the buttons
  },
  saveDefaultsContainer: {
    flexDirection: "row-reverse", // Align the whole row to the right
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 10,
  },
  customFieldRow: {
    flexDirection: 'row', // Align dropdown and button horizontally
    alignItems: 'center', // Vertically align both elements
    marginVertical: 0, // Add spacing between rows
  },
  flexDropdown: {
    flex: 1, // Allow dropdown to take available space
  },
  iconButton: {
    marginLeft: 8, // Add space between dropdown and button
    padding: 8, // Provide touchable area for the button
  },
});

export default JobDetails;
