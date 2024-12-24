import React, { useState } from "react";
import { View, Text, Image ,ScrollView} from "react-native";
import styles from "../assets/StyleSheet";
import StickyBanner from "../Controls/StickyBanner";
import AutocompleteComponent from "../Components/AutocompleteComponent";
import PCsData from "../data/pcOptions.json";
// Import the local image
 const scanImage =require("../assets/images/scan.png") ;
import productsData from "../data/productsData.json";
import { imageMapping } from "../js/imageMapping"
import {
  Provider as PaperProvider,
  DefaultTheme,
  Button,
  Menu,
  TextInput,
} from "react-native-paper";

// import { Dropdown } from "react-native-paper-dropdown";
import { useTheme } from "react-native-paper";
import CustomDropdown from "../Controls/CustomDropdown";
import { FontAwesome } from "@expo/vector-icons";
import FloatingLabelInput from "../Controls/FloatingLabelInputControl";
import FloatingLabelInputControl from "../Controls/FloatingLabelInputControl";
import { TouchableOpacity } from "react-native";
import ListProductDetails from "../Components/ListProductDetails";

const Inventory =({ onNavigateToProductDetails }) => {
  const [pcValue, setPcValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const theme = useTheme();
  const handleSelect = (item, index) => {
    console.log(item);
    setPcValue(item.value);
  };
  // List of actions for the dropdown
  const actionItems = [
    { label: "View Details", value: "view" },
    { label: "Edit", value: "edit" },
    { label: "Delete", value: "delete" },
    { label: "Download", value: "download" },
    { label: "Share", value: "share" },
  ];
  const dynamicMessage = "Welcome to the App! Check out the latest updates.";

  return (
    <>
      <View style={styles.container}>
      <StickyBanner message={dynamicMessage} />
        <View style={[styles.paddingcontainer,styles.scrollingcontainer]}>
          <AutocompleteComponent
            data={PCsData}
            onSelect={(value) => handleSelect(value, 0)}
            placeholder="Select Inventory(PCC..)"
          />

          {/* Actions Dropdown Below Autocomplete */}
          {/* Actions Dropdown and Button */}
          <View style={styles.controlcontainer}>
            <View style={styles.dropdownButtonWrapper}>
              <View style={styles.dropdownContainer}>
                <CustomDropdown />
              </View>
              {/* Material Design Button */}
              <Button
                mode="contained" // You can use "outlined" or "text" for other button styles
                onPress={() => console.log("Button Pressed")}
                style={styles.actionButton}
              >
              GO
              </Button>
            </View>

            {/* Floating Textbox with Search Icon */}
            <View style={styles.searchandscanwrapper}>
              <View style={styles.searchContainer}>
                <FloatingLabelInputControl
                  label="SKU/CPN/UPC/DESCRIPTION"
                  value={searchValue}
                  onChangeText={(text) => setSearchValue(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.scanButton}
                onPress={() => console.log("Scan Button Pressed")}
              >
                 <Image source={scanImage } style={styles.scanImage} />
                {/* <FontAwesome name="qrcode" size={56} color="gray" /> */}
              </TouchableOpacity>
            </View>
            {/* List of Product Details */}
            <ScrollView style={styles.productList} contentContainerStyle={styles.scrollViewContent}>
              {productsData.map((product, index) => (
              <ListProductDetails
              key={index}
              imageUrl={imageMapping[product.imageUrl]}
              description={product.description}
              upc={product.upc}
              ordered={product.ordered}
              min={product.min}
              onHand={product.onHand}
              max={product.max}
              onNavigateToProductDetails={onNavigateToProductDetails}
              />
            ))}
            </ScrollView>
          </View>
          
        </View>
      </View>

      {/* Autocomplete Component */}
    </>
  );
};

export default Inventory;
