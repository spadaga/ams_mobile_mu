import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, Modal, TextInput } from "react-native";
import { Menu, Provider, DefaultTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons"; // Import icons
import FloatingLabelInputControl from "../Controls/FloatingLabelInputControl";
import CustomSnackbar from "../Controls/CustomSnackbar";

const ProductDetails = ({ product }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const [snackbarMessage, setSnackbarMessage] = useState('Details updated successfully');   // State for message content
  const handleTakePhoto = () => {
    closeMenu();
    console.log("Take Photo selected");
    // Add logic to open camera
  };
  const onDismissSnackbar = () => {
    setSnackbarVisible(false);  // Close the Snackbar after dismissal
  };
  const handleUploadFromPhotos = () => {
    closeMenu();
    console.log("Upload from Photos selected");
    // Add logic to upload from gallery
  };

  if (!product) return <Text>No product data available</Text>;

  // Example of inventory data
  const productInventories = [
    { name: "Inventory 1", onHand: 100, min: 10, max: 200, ordered: 50, binLocation: "A1-Westridge dr, Irving, TX, 75039" },
    { name: "Inventory 2", onHand: 150, min: 20, max: 300, ordered: 80, binLocation: "B1-Westridge dr, Irving, TX, 75039" },
    { name: "Inventory 3", onHand: 200, min: 30, max: 500, ordered: 100, binLocation: "C1-Westridge dr, Irving, TX, 75039" },
    { name: "Inventory 4", onHand: 250, min: 40, max: 600, ordered: 120, binLocation: "D1-Westridge dr, Irving, TX, 75039" },
    { name: "Inventory 5", onHand: 300, min: 50, max: 700, ordered: 150, binLocation: "E1-Westridge dr, Irving, TX, 75039" },
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [snackbarType, setSnackbarType] = useState('success');  // State to control Snackbar type (danger, success, warning)
  const handleEditInventory = (inventory) => {
    setSelectedInventory(inventory); // Set the selected inventory data
    setModalVisible(true); // Open the modal
  };

  const handleSave = () => {
    console.log("Saved inventory details:", selectedInventory);
    setSnackbarVisible(true);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false); // Close the modal without saving
  };

  const updateField = (field, value) => {
    setSelectedInventory((prev) => ({ ...prev, [field]: value }));
  };

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      surface: "white", // Change menu background color here
    },
  };

  return (
    <Provider theme={customTheme}>
      <View style={[styles.container,styles.scrollingcontainer]}>
        <View style={styles.innercontainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.label}>
              CPN: <Text style={styles.value}>{product.upc}</Text>
            </Text>
            <Text style={styles.label}>
              Price: <Text style={styles.value}>{product.max}</Text>
            </Text>
            <Text style={styles.label}>
              Total Quantity in Hand:{" "}
              <Text style={styles.value}>{product.onHand}</Text>
            </Text>
            <Text style={styles.label}>
              Total Quantity Ordered:{" "}
              <Text style={styles.value}>{product.ordered}</Text>
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={product.imageUrl} style={styles.image} />
            {/* Link under the image */}
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity onPress={openMenu} style={styles.link}>
                  <Text style={styles.linkText} numberOfLines={1}>Tap to change photo</Text>
                </TouchableOpacity>
              }
              contentStyle={styles.menuContent}
            >
              <View style={{ backgroundColor: "white", borderRadius: 0 }}>
                <Menu.Item
                  onPress={handleTakePhoto}
                  title={
                    <View style={styles.menuItemContainer}>
                      <MaterialIcons name="photo-camera" size={20} style={styles.icon} />
                      <Text style={styles.menuItemText}>Take Photo</Text>
                    </View>
                  }
                />
                <View style={styles.divider} />
                <Menu.Item
                  onPress={handleUploadFromPhotos}
                  title={
                    <View style={styles.menuItemContainer}>
                      <MaterialIcons name="photo-library" size={20} style={styles.icon} />
                      <Text style={styles.menuItemText}>Upload from computer</Text>
                    </View>
                  }
                />
              </View>
            </Menu>
          </View>
        </View>

        {/* Inventory List */}
        <View style={styles.inventoryContainer}>
          <Text style={styles.inventoryTitle}>Inventory List</Text>
          {productInventories.map((inventory, index) => (
            <View key={index} style={styles.inventoryItem}>
              {/* Inventory Header */}
              <View style={styles.inventoryHeader}>
                <Text style={styles.inventoryName}>{inventory.name}</Text>
                <TouchableOpacity style={styles.editIcon} onPress={() => handleEditInventory(inventory)}>
                  <MaterialIcons name="edit" size={20} color="rgb(0, 48, 105)" />
                </TouchableOpacity>
              </View>

              {/* Inventory Details */}
              <View style={styles.inventoryDetailsRow}>
                <Text>
                  <Text style={styles.inventoryDetailLabel}>On Hand: </Text>
                  <Text style={styles.inventoryDetailValue}>{inventory.onHand}</Text>
                </Text>
                <Text>
                  <Text style={styles.inventoryDetailLabel}>Min: </Text>
                  <Text style={styles.inventoryDetailValue}>{inventory.min}</Text>
                </Text>
                <Text>
                  <Text style={styles.inventoryDetailLabel}>Max: </Text>
                  <Text style={styles.inventoryDetailValue}>{inventory.max}</Text>
                </Text>
              </View>
              <Text>
                <Text style={styles.inventoryDetailLabel}>Bin Location: </Text>
                <Text style={styles.inventoryDetailValue}>{inventory.binLocation}</Text>
              </Text>
            </View>
          ))}
        </View>

        {/* Modal for Editing Inventory */}
        <Modal visible={isModalVisible} transparent={true} animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Edit Inventory</Text>
                <TouchableOpacity onPress={handleCancel}>
                  <MaterialIcons name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              {selectedInventory && (
                <>
                  <View style={styles.modalInputsContainer}>
                    <View style={{ marginBottom: 24 }}>
                      <FloatingLabelInputControl
                        label="Min Quantity"
                        value={String(selectedInventory.min)}
                        onChangeText={(text) => updateField("min", text)}
                        showIconContainer={false}
                      />
                    </View>
                    <View style={{ marginBottom: 24 }}>
                      <FloatingLabelInputControl
                        label="Max Quantity"
                        value={String(selectedInventory.max)}
                        onChangeText={(text) => updateField("max", text)}
                        showIconContainer={false}
                      />
                    </View>
                    <View style={{ marginBottom: 24 }}>
                      <FloatingLabelInputControl
                        label="Bin Location"
                        value={String(selectedInventory.binLocation)}
                        onChangeText={(text) => updateField("binLocation", text)}
                        showIconContainer={false}
                      />
                    </View>
                  </View>

                  {/* Buttons Container */}
                  <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                      <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                      <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
        </Modal>
         {/* Custom Snackbar */}
         <CustomSnackbar
          visible={snackbarVisible}
          onDismiss={onDismissSnackbar}
          message={snackbarMessage}
          type={snackbarType}  // Pass type to display the respective background and icon
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full screen height
  paddingVertical: 8,
  paddingHorizontal: 16,
  width: "100%", // Ensure the width is 100% of the screen
  overflow: "hidden", // Prevent content from overflowing
  },
  innercontainer: {
    flexDirection: "row",
    padding: 8,
    borderColor: "rgb(204, 204, 204)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F6F8F9",
  },
  detailsContainer: {
    flex: 3,  // Takes 75% of the width
    justifyContent: "center",
    paddingRight: 10,
  },
  imageContainer: {
    flex: 1,  // Takes 25% of the width
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#7E8A8C",
  },
  value: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7E8A8C",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
    color: "black",
  },
  menuItemText: {
    fontSize: 16,
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 12,
  },
  menuContent: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  // Link style
  link: {
    marginTop: 8,
    paddingHorizontal: 16, // Uniform horizontal padding
    paddingRight: 0,       // Override right padding to avoid excess padding
    marginRight: 16,       // Adds space between the link and the screen's edge
  },
  linkText: {
    color: "#003069",
    textDecorationLine: "underline",
    fontSize: 16,
    marginRight: 24,
  },

  // Inventory section styles
  inventoryContainer: {
    marginTop: 20,
    paddingHorizontal: 0, // Same left and right padding as 'container'
  },
  inventoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    backgroundColor: "#003069", // Background color for inventory header
    color: "white", // White text
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  inventoryItem: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  inventoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inventoryName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  editIcon: {
    padding: 8,
    color: "rgb(0, 48, 105)"
  },
  inventoryDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  inventoryDetail: {
    fontSize: 14,
    marginBottom: 4,
  },
  inventoryDetailLabel: {
    fontSize: 14,
    fontWeight: "bold", // Makes the label stand out
    color: "rgb(126, 138, 140)",   // Use a consistent color for all labels
  },

  inventoryDetailValue: {
    fontSize: 14,
    fontWeight: "normal", // Differentiates the value from the label
    color: "#7E8A8C",     // Use a lighter color for values
  },
  modalOverlay: {
    flex: 1,
  justifyContent: "flex-start", // Align content to the top
  alignItems: "center",         // Center horizontally
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Dimmed background
  paddingTop: 50,              // Add padding at the top if needed
  },
  modalContainer: {
    backgroundColor: "white",
    width: "90%",                 // Adjust width for responsiveness
    borderRadius: 8,
    padding: 16,        
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 4,
    color: "#333",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16, // Space between inputs and buttons
  },
  saveButton: {
    backgroundColor: "#003069",
    padding: 12,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
    marginRight: 8,
  },
  cancelButton: {
    backgroundColor: "#ccc",
    padding: 12,
    borderRadius: 4,
    flex: 1,
    alignItems: "center",
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
 
  floatinginput: {
    marginBottom: 16, // Add vertical space between each input
    paddingVertical: 10, // Internal vertical padding
    paddingHorizontal: 8, // Internal horizontal padding
    borderRadius: 8, // Rounded corners for input container
    backgroundColor: "#fff", // White background
    borderWidth: 1, // Optional border
    borderColor: "#ccc", // Light gray border
  },
  scrollingcontainer:
  {
    display:"flex",
    flex:1,
    overflow:"scroll"
  },
});

export default ProductDetails;
